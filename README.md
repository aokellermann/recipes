# The Scenic Route

A Cloudflare Worker that proxies recipe websites and strips out the actual recipe, leaving only the lengthy backstories and life stories. Take the long way!

## Usage

Visit [recipes.aok.site](https://recipes.aok.site) and enter a recipe URL, or navigate directly:

```
https://recipes.aok.site/https://example.com/chocolate-chip-cookies
```

## Development

```bash
bun install        # Install dependencies
bun run dev        # Start local dev server
bun test           # Run tests
bun run deploy     # Deploy to Cloudflare Workers
```
