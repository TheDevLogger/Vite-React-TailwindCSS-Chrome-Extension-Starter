# React + TypeScript + Vite

## Getting started


First, install dependencies and check that the project runs correctly: 
```bash
bun install
bun run dev
# or
npm install
npm run dev
```

To build the project as a chrome extension, run:
```bash
bun run build
# or
npm run build
```
This will output a `dist` folder with the built extension inside.

## Testing extension in Google Chrome
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable `Developer mode` in the top right corner
3. Click `Load unpacked` and select the `dist` folder
