# Vite + React + TailwindCSS + TypeScript Chrome Extension Starter

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

## Additional Info
The `./src/manifest.json` file is the manifest file for the extension. You can modify it to suit your needs. When you build the project, the manifest file is copied to the `dist` folder.
