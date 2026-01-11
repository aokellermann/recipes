# The Scenic Route

A Cloudflare Worker that proxies recipe websites and strips out the actual recipe, leaving only the lengthy backstories and life stories. Take the long way!

## Usage

Visit [thescenicroute.com](https://thescenicroute.com) and enter a recipe URL, or navigate directly:

```
https://thescenicroute.com/https://example.com/chocolate-chip-cookies
```

## Development

```bash
bun install        # Install dependencies
bun run dev        # Start local dev server
bun test           # Run tests
bun run deploy     # Deploy to Cloudflare Workers
```
