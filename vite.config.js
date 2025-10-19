import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],
  // Config for multi-page app
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        versionPlan: resolve(__dirname, "version-plan/index.html"),
      },
    },
  },
});
