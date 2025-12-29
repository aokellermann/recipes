# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Recipe Backstory Proxy - A humorous Cloudflare Worker that proxies recipe websites and strips out the actual recipe, leaving only the lengthy backstories and life stories.

## Commands

```bash
bun install        # Install dependencies
bun run dev        # Start local dev server (wrangler)
bun test           # Run tests
bun run deploy     # Deploy to Cloudflare Workers
```

## Architecture

- **Runtime**: Cloudflare Workers
- **Entry**: `src/index.ts` - Single file worker using HTMLRewriter
- **URL Format**: Path-based proxy (`/https://recipe-site.com/cookies`)

### Key Components in src/index.ts

- `RECIPE_SELECTORS` - CSS selectors for recipe elements to remove
- `RecipeRemover` - HTMLRewriter handler that removes matched elements
- `LinkRewriter` - Rewrites links to stay within the proxy
- `BannerInjector` - Injects humorous banner at top of proxied pages
- `LANDING_PAGE` - Homepage HTML with form to enter recipe URLs
