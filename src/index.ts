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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a67c52' stroke-width='1.5'%3E%3Cpath d='M12 2C13.5 4 15 6 15 9c0 3-2 5-3 6.5C11 14 9 12 9 9c0-3 1.5-5 3-7z'/%3E%3Cpath d='M12 22v-6.5'/%3E%3Cpath d='M9 18c-2 0-4-1-4-3s2-3 4-3'/%3E%3Cpath d='M15 18c2 0 4-1 4-3s-2-3-4-3'/%3E%3C/svg%3E">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Lora', Georgia, serif;
      line-height: 1.8;
      color: #2d2a26;
      min-height: 100vh;
      background:
        radial-gradient(ellipse at top left, rgba(255, 248, 240, 0.8) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(255, 235, 210, 0.6) 0%, transparent 50%),
        linear-gradient(180deg, #fdf8f3 0%, #f5ebe0 100%);
    }

    .container {
      max-width: 720px;
      margin: 0 auto;
      padding: 1.5rem 1.5rem;
    }

    header {
      text-align: center;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .decorative-line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 0.75rem;
      color: #c4a574;
    }

    .decorative-line::before,
    .decorative-line::after {
      content: '';
      height: 1px;
      width: 60px;
      background: linear-gradient(90deg, transparent, #c4a574, transparent);
    }

    .decorative-line svg {
      width: 24px;
      height: 24px;
    }

    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(2rem, 6vw, 2.5rem);
      font-weight: 600;
      color: #5d4e37;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }

    .subtitle {
      font-style: italic;
      color: #7a6f63;
      font-size: 1rem;
      max-width: 28em;
      margin: 0 auto;
    }

    .story {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.05),
        0 10px 20px -5px rgba(93, 78, 55, 0.1);
      margin-bottom: 1rem;
      position: relative;
      overflow: hidden;
    }

    .story::before {
      content: '"';
      position: absolute;
      top: -15px;
      left: 10px;
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      color: #f5ebe0;
      line-height: 1;
      pointer-events: none;
    }

    .story p {
      margin-bottom: 0.75rem;
      position: relative;
      z-index: 1;
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .story p:last-child {
      margin-bottom: 0;
    }

    .story strong {
      color: #a67c52;
      font-weight: 500;
    }

    .dropcap::first-letter {
      float: left;
      font-family: 'Playfair Display', serif;
      font-size: 2.75rem;
      line-height: 0.85;
      padding-right: 0.4rem;
      color: #a67c52;
      font-weight: 600;
    }

    form {
      background: white;
      padding: 1.25rem;
      border-radius: 12px;
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.05),
        0 10px 20px -5px rgba(93, 78, 55, 0.1);
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #5d4e37;
      font-size: 0.9rem;
    }

    .input-wrapper {
      position: relative;
      margin-bottom: 0.75rem;
    }

    input[type="url"] {
      width: 100%;
      padding: 0.75rem 0.75rem 0.75rem 2.5rem;
      font-size: 0.9rem;
      font-family: 'Lora', Georgia, serif;
      border: 2px solid #e8e0d5;
      border-radius: 8px;
      background: #fdfcfa;
      color: #2d2a26;
      transition: all 0.2s ease;
    }

    input[type="url"]::placeholder {
      color: #b5a99a;
    }

    input[type="url"]:focus {
      outline: none;
      border-color: #c4a574;
      background: white;
      box-shadow: 0 0 0 3px rgba(196, 165, 116, 0.15);
    }

    .input-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #b5a99a;
      pointer-events: none;
    }

    .input-icon svg {
      width: 16px;
      height: 16px;
    }

    button {
      width: 100%;
      background: linear-gradient(135deg, #a67c52 0%, #8b6542 100%);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
      font-family: 'Lora', Georgia, serif;
      font-weight: 500;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(139, 101, 66, 0.25);
    }

    button:hover {
      background: linear-gradient(135deg, #b88c62 0%, #9b7552 100%);
      box-shadow: 0 6px 16px rgba(139, 101, 66, 0.35);
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0);
    }

    footer {
      margin-top: 1.25rem;
      text-align: center;
      color: #9a8f83;
      font-size: 0.85rem;
    }

    footer a {
      color: #a67c52;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;
    }

    footer a:hover {
      border-bottom-color: #a67c52;
    }

    @media (max-width: 600px) {
      .container { padding: 0.75rem; }
      header { margin-bottom: 1rem; }
      .decorative-line { margin-bottom: 0.5rem; }
      .decorative-line svg { width: 20px; height: 20px; }
      h1 { font-size: 1.75rem; margin-bottom: 0.25rem; }
      .subtitle { font-size: 0.9rem; }
      .story { padding: 1rem; margin-bottom: 0.75rem; }
      .story::before { font-size: 3.5rem; top: -8px; left: 5px; }
      .story p { font-size: 0.875rem; margin-bottom: 0.5rem; line-height: 1.6; }
      .dropcap::first-letter { font-size: 2.25rem; }
      form { padding: 0.875rem; }
      label { font-size: 0.85rem; margin-bottom: 0.375rem; }
      .input-wrapper { margin-bottom: 0.5rem; }
      input[type="url"] { padding: 0.625rem 0.625rem 0.625rem 2.25rem; font-size: 0.85rem; }
      button { padding: 0.625rem 1rem; font-size: 0.9rem; }
      footer { margin-top: 0.75rem; font-size: 0.8rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="decorative-line">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2C13.5 4 15 6 15 9c0 3-2 5-3 6.5C11 14 9 12 9 9c0-3 1.5-5 3-7z"/>
          <path d="M12 22v-6.5"/>
          <path d="M9 18c-2 0-4-1-4-3s2-3 4-3"/>
          <path d="M15 18c2 0 4-1 4-3s-2-3-4-3"/>
        </svg>
      </div>
      <h1>The Scenic Route</h1>
      <p class="subtitle">Finally, a way to enjoy recipe blogs the way they were meant to be read.</p>
    </header>

    <div class="story">
      <p class="dropcap">You know what I love about recipe blogs? The recipes? Absolutely not.</p>
      <p>I'm here for the journey. The deeply personal anecdotes about how this particular arrangement of flour and sugar reminds the author of that summer in Tuscany when they discovered themselves while studying abroad.</p>
      <p>I want to know about their grandmother's kitchen. Their child's first steps. Their husband's initially skeptical but ultimately supportive reaction to yet another kitchen experiment.</p>
      <p>This proxy strips away all that pesky recipe information so you can focus on what really matters: <strong>the story</strong>.</p>
    </div>

    <form id="proxy-form">
      <label for="url">Paste a recipe URL to begin your journey</label>
      <div class="input-wrapper">
        <span class="input-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </span>
        <input type="url" id="url" name="url" placeholder="https://ohmyveggies.com/easy-vegan-potato-curry/">
      </div>
      <button type="submit">Read the Backstory</button>
    </form>

    <footer>
      <a href="https://github.com/aokellermann/recipes">GitHub</a>
    </footer>
  </div>

  <script>
    document.getElementById('proxy-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('url');
      const url = input.value || input.placeholder;
      window.location.href = '/' + url;
    });
  </script>
</body>
</html>`;

function getBannerHtml(proxyOrigin: string): string {
  return `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Lora&display=swap" rel="stylesheet">
<div id="backstory-banner" style="
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #5d4e37 0%, #3d3228 100%);
  color: #f5ebe0;
  padding: 14px 24px;
  font-family: 'Lora', Georgia, serif;
  font-size: 14px;
  text-align: center;
  z-index: 999999;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
">
  <span style="display: inline-flex; align-items: center; gap: 8px;">
    <svg viewBox="0 0 24 24" fill="none" stroke="#c4a574" stroke-width="1.5" style="width: 20px; height: 20px;">
      <path d="M12 2C13.5 4 15 6 15 9c0 3-2 5-3 6.5C11 14 9 12 9 9c0-3 1.5-5 3-7z"/>
      <path d="M12 22v-6.5"/>
      <path d="M9 18c-2 0-4-1-4-3s2-3 4-3"/>
      <path d="M15 18c2 0 4-1 4-3s-2-3-4-3"/>
    </svg>
    <strong style="font-family: 'Playfair Display', Georgia, serif; font-weight: 600; color: #fff;">The Scenic Route</strong>
  </span>
  <span style="color: #d4c9bc;">Recipe removed. Enjoy the story!</span>
  <a href="${proxyOrigin}/" style="
    color: #c4a574;
    text-decoration: none;
    padding: 6px 14px;
    border: 1px solid rgba(196, 165, 116, 0.4);
    border-radius: 6px;
    font-size: 13px;
    transition: all 0.2s;
  " onmouseover="this.style.background='rgba(196,165,116,0.15)';this.style.borderColor='#c4a574'" onmouseout="this.style.background='transparent';this.style.borderColor='rgba(196,165,116,0.4)'">Try another</a>
</div>
<div style="height: 56px;"></div>
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
