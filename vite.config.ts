import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import {VitePWA} from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "prompt",
    devOptions: {
      enabled: true
    },
    includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    manifest: {
      name: "Aldipratama | portfolio",
      short_name: "Aldipratama",
      description: "portfolio web application",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/android-chrome-512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png"
        },
        {
          src: "/favicon-16x16",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/favicon-32x32",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
      ],
      theme_color: "#282c33",
      background_color: "#282c33",
      display: "standalone",
      scope: "/",
      start_url: "/",
      orientation: "portrait"
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
