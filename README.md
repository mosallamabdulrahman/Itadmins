<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Verify and publish

```bash
npm run lint
npm run build
npm run preview
npm run deploy
```

Production files are generated in `build/`. This avoids the inherited Windows
permissions on the old `dist/` folder. `npm run deploy` builds and publishes this
folder to the `gh-pages` branch.

The app is hosted under `/Itadmins/`. The manifest and service worker use this
scope. The postbuild script generates `build/404.html` for direct visits to
client-side routes on GitHub Pages.

PWA icons use `public/images/favicon.png`; the in-page launch screen uses
`public/images/logo.png`. Install through the browser's install option or Add to
Home Screen on iOS. The operating system controls its own native splash screen.
