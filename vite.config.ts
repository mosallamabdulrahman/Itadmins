import tailwindcss from "@tailwindcss/vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    base: "/Itadmins/",
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["images/favicon.png", "images/logo.png", "apple-touch-icon.png"],
        workbox: {
          navigateFallback: "/Itadmins/index.html",
          globPatterns: ["**/*.{js,css,html,png,ico,svg,webp,jpg,woff2}"],
        },
        manifest: {
          id: "/Itadmins/",
          name: "ITADMINZ",
          short_name: "ITADMINZ",
          description: "ITADMINZ — Smart IT solutions and services.",

          start_url: "/Itadmins/",
          scope: "/Itadmins/",
          display: "standalone",

          background_color: "#ffffff",
          theme_color: "#bd161e",

          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "pwa-maskable-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      hmr: true,
    },
  };
});
