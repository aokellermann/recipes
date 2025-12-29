import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import { spawn, type Subprocess } from 'bun';

const PORT = 8799;
const BASE_URL = `http://localhost:${PORT}`;

// Test recipe URLs from various popular recipe sites
const RECIPE_SITES = {
  allrecipes: {
    url: 'https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/',
    name: 'AllRecipes',
  },
  seriouseats: {
    url: 'https://www.seriouseats.com/the-food-lab-best-chocolate-chip-cookie-recipe',
    name: 'Serious Eats',
  },
  sallysbaking: {
    url: 'https://sallysbakingaddiction.com/chocolate-chip-cookies/',
    name: "Sally's Baking Addiction",
  },
};

describe('Recipe Backstory Proxy', () => {
  let serverProcess: Subprocess;

  beforeAll(async () => {
    serverProcess = spawn(['bunx', 'wrangler', 'dev', '--port', String(PORT)], {
      stdout: 'pipe',
      stderr: 'pipe',
    });

    // Wait for server to be ready
    for (let i = 0; i < 30; i++) {
      try {
        const resp = await fetch(BASE_URL);
        if (resp.ok) break;
      } catch {
        await Bun.sleep(500);
      }
    }
  });

  afterAll(() => {
    serverProcess?.kill();
  });

  describe('Landing Page', () => {
    test('returns landing page HTML at root', async () => {
      const resp = await fetch(BASE_URL);
      expect(resp.status).toBe(200);
      const text = await resp.text();
      expect(text).toContain('Recipe Backstory Proxy');
      expect(text).toContain('proxy-form');
    });
  });

  describe('URL Validation', () => {
    test('rejects invalid URLs', async () => {
      const resp = await fetch(`${BASE_URL}/not-a-valid-url`);
      expect(resp.status).toBe(400);
      const text = await resp.text();
      expect(text).toContain('Invalid URL');
    });

    test('rejects non-http protocols', async () => {
      const resp = await fetch(`${BASE_URL}/ftp://example.com`);
      expect(resp.status).toBe(400);
    });
  });

  describe('Core Proxy Functionality', () => {
    test('injects backstory banner', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      expect(resp.status).toBe(200);
      const text = await resp.text();
      expect(text).toContain('backstory-banner');
      expect(text).toContain('The recipe has been removed');
    });

    test('injects base tag for relative URLs', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      const text = await resp.text();
      expect(text).toContain('<base href="https://www.allrecipes.com');
    });

    test('preserves page content (not empty)', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      const text = await resp.text();
      expect(text.length).toBeGreaterThan(10000);
    });
  });

  describe('Non-HTML passthrough', () => {
    test('passes through non-HTML content unchanged', async () => {
      const resp = await fetch(`${BASE_URL}/https://www.google.com/robots.txt`);
      expect(resp.status).toBe(200);
      const text = await resp.text();
      expect(text).toContain('User-agent');
      expect(text).not.toContain('backstory-banner');
    });
  });

  describe('AllRecipes (Dotdash Meredith)', () => {
    test('removes recipe ingredients element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      const text = await resp.text();
      // Check that the actual element is removed (not just string references)
      expect(text).not.toMatch(/class="[^"]*mm-recipes-structured-ingredients[^"]*"/);
    });

    test('removes recipe steps element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      const text = await resp.text();
      expect(text).not.toMatch(/class="[^"]*comp mm-recipes-steps[^"]*"/);
    });

    test('removes nutrition facts element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      const text = await resp.text();
      expect(text).not.toMatch(/class="[^"]*comp mm-recipes-nutrition-facts[^"]*"/);
    });

    test('removes recipe details element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.allrecipes.url}`);
      const text = await resp.text();
      expect(text).not.toMatch(/class="comp mm-recipes-details"/);
    });
  });

  describe('Serious Eats (Dotdash Meredith)', () => {
    test('successfully proxies page', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.seriouseats.url}`);
      expect(resp.status).toBe(200);
      const text = await resp.text();
      expect(text).toContain('backstory-banner');
      expect(text.length).toBeGreaterThan(10000);
    });

    test('removes recipe ingredients element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.seriouseats.url}`);
      const text = await resp.text();
      expect(text).not.toMatch(/class="[^"]*mm-recipes-structured-ingredients[^"]*"/);
    });
  });

  describe("Sally's Baking Addiction (Tasty Recipes plugin)", () => {
    test('successfully proxies page', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.sallysbaking.url}`);
      expect(resp.status).toBe(200);
      const text = await resp.text();
      expect(text).toContain('backstory-banner');
    });

    test('removes tasty-recipes card element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.sallysbaking.url}`);
      const text = await resp.text();
      // The main recipe card element should be removed
      expect(text).not.toMatch(/<div[^>]*class="tasty-recipes[^"]*tasty-recipes-display[^"]*"/);
    });

    test('removes tasty-recipes ingredients element', async () => {
      const resp = await fetch(`${BASE_URL}/${RECIPE_SITES.sallysbaking.url}`);
      const text = await resp.text();
      // Check for the actual element, not CSS/JS references
      expect(text).not.toMatch(/<div[^>]*class="[^"]*tasty-recipes-ingredients[^"]*"[^>]*>/);
    });
  });

});
