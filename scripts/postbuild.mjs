import { copyFile } from "node:fs/promises";

// GitHub Pages serves this file for direct visits to client-side routes.
await copyFile(new URL("../build/index.html", import.meta.url), new URL("../build/404.html", import.meta.url));
