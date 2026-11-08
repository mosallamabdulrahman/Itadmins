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
```

`npm run build` generates `dist/` for the root of a custom domain, such as
`https://newitadmins.mosalam.com/`. Upload the contents of `dist/` directly into
the domain's document root, including `.htaccess`. Do not upload the folder as
a nested directory. The Apache rules support direct visits to internal routes.

Replace the existing `index.html` and `.htaccess` as well as assets. If the live
page source still references `/Itadmins/assets/`, the old index is still being
served. The current build references `/assets/`. Clear browser site data after
replacing an older PWA installation if it still shows cached content.

The router, manifest and service worker all use `/`. GitHub stores source code;
deployment is a manual upload to the hosting server.

PWA icons use `public/images/favicon.png`; the in-page launch screen uses
`public/images/logo.png`. Install through the browser's install option or Add to
Home Screen on iOS. The operating system controls its own native splash screen.
