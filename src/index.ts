// Recipe selectors to remove - these contain the actual recipe content
const RECIPE_SELECTORS = [
  // Common recipe plugin containers
  '.wprm-recipe-container',
  '.wprm-recipe',
  '.tasty-recipes',
  '.tasty-recipes-entry-content',
  '.tasty-recipes-entry-header',
  '.tasty-recipes-header-content',
  '.tasty-recipes-image',
  '.tasty-recipes-details',
  '.tasty-recipes-buttons',
  '.mv-recipe-card',
  '.mv-create-card',
  '.easyrecipe',
  '.hrecipe',
  '.jetpack-recipe',
  '.recipe-card',
  '.recipe-card-container',
  '.recipe-content',
  '.recipe-box',
  '.recipe-summary',
  '.yoast-schema-graph',

  // AllRecipes / Meredith / Serious Eats / Dotdash sites (mm-recipes-*)
  '.mm-recipes-structured-ingredients',
  '.mm-recipes-steps',
  '.mm-recipes-details',
  '.mm-recipes-nutrition-facts',
  '.mm-recipes-nutrition-facts-summary',
  '.mm-recipes-nutrition-facts-label',
  '.mm-recipes-serving-size-adjuster',
  '.mm-recipes-jump-to-recipe',
  '.mm-recipes-rate-print',
  '.mm-recipes-save-rate-print',
  '.mm-recipes-review-bar',
  '.mm-recipes-made-it',
  '.mm-recipes-screen-wake',
  '.mm-recipes-lrs-ingredients',
  '.allrecipes-jump-to-recipe',
  '.mntl-recipe-ingredients',
  '.mntl-recipe-instructions',

  // Bon Appetit / Epicurious / Conde Nast
  '.recipe__main-content',
  '[data-testid="IngredientList"]',
  '[data-testid="InstructionList"]',
  '[data-testid="RecipePageHeader"]',

  // Food Network / Discovery
  '.o-RecipeInfo',
  '.o-Ingredients',
  '.o-Method',
  '.o-NutritionInfo',

  // Generic recipe sections
  '#recipe',
  '#recipe-card',
  '.recipe',
  '.the-recipe',
  '.entry-recipe',

  // Ingredients
  '.ingredients',
  '.ingredient-list',
  '.wprm-recipe-ingredients',
  '.tasty-recipes-ingredients',
  '.tasty-recipes-ingredients-body',
  '[itemprop="recipeIngredient"]',

  // Instructions/Directions
  '.instructions',
  '.directions',
  '.recipe-instructions',
  '.recipe-directions',
  '.wprm-recipe-instructions',
  '.tasty-recipes-instructions',
  '.tasty-recipes-instructions-body',
  '[itemprop="recipeInstructions"]',

  // Nutrition
  '.nutrition',
  '.nutrition-info',
  '.wprm-nutrition-label',
  '.tasty-recipes-nutrition',
  '[itemprop="nutrition"]',

  // Recipe metadata
  '.recipe-meta',
  '.cook-time',
  '.prep-time',
  '.total-time',
  '.tasty-recipes-cook-time',
  '.tasty-recipes-prep-time',
  '.tasty-recipes-total-time',
  '[itemprop="cookTime"]',
  '[itemprop="prepTime"]',
  '[itemprop="totalTime"]',

  // Jump/Print buttons
  '.jump-to-recipe',
  '.jump-to-recipe-button',
  '.print-recipe',
  '.print-recipe-button',
  '.wprm-recipe-jump',
  '.wprm-recipe-print',
  '.tasty-recipes-print-button',
  '.tasty-recipes-jump-button',
];

// Selectors for elements with Recipe microdata
const MICRODATA_SELECTOR = '[itemtype*="schema.org/Recipe"]';

const LANDING_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Scenic Route</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Georgia, 'Times New Roman', serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.8;
      background: #faf9f7;
      color: #333;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #8b4513;
    }
    .subtitle {
      font-style: italic;
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
    .story {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    .story p { margin-bottom: 1rem; }
    form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    label { display: block; margin-bottom: 0.5rem; font-weight: bold; }
    input[type="url"] {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border: 2px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    button {
      background: #8b4513;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover { background: #a0522d; }
    .footer {
      margin-top: 2rem;
      text-align: center;
      color: #888;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <h1>The Scenic Route</h1>
  <p class="subtitle">Finally, a way to enjoy recipe blogs the way they were meant to be read.</p>

  <div class="story">
    <p>You know what I love about recipe blogs? The recipes? Absolutely not.</p>
    <p>I'm here for the journey. The deeply personal anecdotes about how this particular arrangement of flour and sugar reminds the author of that summer in Tuscany when they discovered themselves while studying abroad.</p>
    <p>I want to know about their grandmother's kitchen. Their child's first steps. Their husband's initially skeptical but ultimately supportive reaction to yet another kitchen experiment.</p>
    <p>This proxy strips away all that pesky recipe information so you can focus on what really matters: <strong>the story</strong>.</p>
  </div>

  <form id="proxy-form">
    <label for="url">Enter a recipe URL:</label>
    <input type="url" id="url" name="url" placeholder="https://example.com/grandmas-famous-cookies" required>
    <button type="submit">Read the Backstory</button>
  </form>

  <p class="footer">No recipes were harmed in the making of this website. Well, they were removed, but that's kind of the point.</p>

  <script>
    document.getElementById('proxy-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const url = document.getElementById('url').value;
      window.location.href = '/' + url;
    });
  </script>
</body>
</html>`;

function getBannerHtml(proxyOrigin: string): string {
  return `
<div id="backstory-banner" style="
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  padding: 12px 20px;
  font-family: Georgia, serif;
  font-size: 14px;
  text-align: center;
  z-index: 999999;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
">
  <strong>The Scenic Route</strong> &mdash;
  The recipe has been removed for your reading pleasure. Enjoy the story!
  <a href="${proxyOrigin}/" style="color: #ffd700; margin-left: 10px;">Try another</a>
</div>
<div style="height: 50px;"></div>
`;
}

class RecipeRemover {
  element(element: Element) {
    element.remove();
  }
}

class JsonLdRecipeRemover {
  private buffer = '';

  text(text: Text) {
    this.buffer += text.text;
    if (text.lastInTextNode) {
      try {
        const data = JSON.parse(this.buffer);
        if (this.containsRecipe(data)) {
          text.remove();
        }
      } catch {
        // Not valid JSON or parsing error, leave it alone
      }
      this.buffer = '';
    } else {
      text.remove();
    }
  }

  private containsRecipe(data: unknown): boolean {
    if (Array.isArray(data)) {
      return data.some((item) => this.containsRecipe(item));
    }
    if (typeof data === 'object' && data !== null) {
      const obj = data as Record<string, unknown>;
      if (obj['@type'] === 'Recipe' || obj['@type']?.toString().includes('Recipe')) {
        return true;
      }
      if (obj['@graph'] && Array.isArray(obj['@graph'])) {
        return obj['@graph'].some((item) => this.containsRecipe(item));
      }
    }
    return false;
  }
}

class JsonLdScriptHandler {
  element(element: Element) {
    // Mark for potential removal - actual removal happens in text handler
  }
}

class LinkRewriter {
  private proxyOrigin: string;
  private targetOrigin: string;

  constructor(proxyOrigin: string, targetOrigin: string) {
    this.proxyOrigin = proxyOrigin;
    this.targetOrigin = targetOrigin;
  }

  element(element: Element) {
    const href = element.getAttribute('href');
    if (!href) return;

    try {
      // Handle relative URLs
      if (href.startsWith('/') && !href.startsWith('//')) {
        element.setAttribute('href', `${this.proxyOrigin}/${this.targetOrigin}${href}`);
      }
      // Handle absolute URLs to the same origin
      else if (href.startsWith(this.targetOrigin)) {
        element.setAttribute('href', `${this.proxyOrigin}/${href}`);
      }
      // Handle protocol-relative URLs
      else if (href.startsWith('//')) {
        const fullUrl = 'https:' + href;
        if (fullUrl.startsWith(this.targetOrigin)) {
          element.setAttribute('href', `${this.proxyOrigin}/${fullUrl}`);
        }
      }
    } catch {
      // Invalid URL, leave it alone
    }
  }
}

class BannerInjector {
  private proxyOrigin: string;

  constructor(proxyOrigin: string) {
    this.proxyOrigin = proxyOrigin;
  }

  element(element: Element) {
    element.prepend(getBannerHtml(this.proxyOrigin), { html: true });
  }
}

class BaseTagInjector {
  private targetUrl: string;

  constructor(targetUrl: string) {
    this.targetUrl = targetUrl;
  }

  element(element: Element) {
    // Inject base tag to make relative URLs resolve to original domain
    element.prepend(`<base href="${this.targetUrl}">`, { html: true });
  }
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const proxyOrigin = url.origin;

    // Landing page
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(LANDING_PAGE, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      });
    }

    // Extract target URL from path (remove leading slash)
    const targetUrl = url.pathname.slice(1) + url.search;

    // Validate URL
    let parsedTarget: URL;
    try {
      parsedTarget = new URL(targetUrl);
      if (!['http:', 'https:'].includes(parsedTarget.protocol)) {
        throw new Error('Invalid protocol');
      }
    } catch {
      return new Response('Invalid URL. Please provide a valid http or https URL.', {
        status: 400,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    // Fetch the target page
    let response: Response;
    try {
      response = await fetch(parsedTarget.toString(), {
        headers: {
          'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0 (compatible; RecipeBackstoryProxy/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': request.headers.get('Accept-Language') || 'en-US,en;q=0.5',
        },
        redirect: 'follow',
      });
    } catch (err) {
      return new Response(`Failed to fetch the recipe page: ${err}`, {
        status: 502,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    // Only process HTML responses
    const contentType = response.headers.get('Content-Type') || '';
    if (!contentType.includes('text/html')) {
      return response;
    }

    const targetOrigin = parsedTarget.origin;

    // Build the HTMLRewriter with all our transformations
    let rewriter = new HTMLRewriter();

    // Remove recipe elements
    for (const selector of RECIPE_SELECTORS) {
      rewriter = rewriter.on(selector, new RecipeRemover());
    }

    // Remove microdata recipe elements
    rewriter = rewriter.on(MICRODATA_SELECTOR, new RecipeRemover());

    // Handle JSON-LD scripts that contain Recipe data
    rewriter = rewriter.on('script[type="application/ld+json"]', new JsonLdScriptHandler());

    // Rewrite links to stay within proxy
    rewriter = rewriter.on('a[href]', new LinkRewriter(proxyOrigin, targetOrigin));

    // Inject base tag to fix relative URLs for CSS/JS/images
    rewriter = rewriter.on('head', new BaseTagInjector(parsedTarget.toString()));

    // Inject our banner
    rewriter = rewriter.on('body', new BannerInjector(proxyOrigin));

    // Transform and return
    const transformedResponse = rewriter.transform(response);

    // Copy headers but update content-type to ensure UTF-8
    const headers = new Headers(transformedResponse.headers);
    headers.set('Content-Type', 'text/html;charset=UTF-8');
    // Remove CSP that might block our injected styles
    headers.delete('Content-Security-Policy');

    return new Response(transformedResponse.body, {
      status: transformedResponse.status,
      headers,
    });
  },
};
