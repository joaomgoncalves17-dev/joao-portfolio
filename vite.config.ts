import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        portuguese: fileURLToPath(new URL("./pt/index.html", import.meta.url)),
        notFound: fileURLToPath(new URL("./404.html", import.meta.url)),
      },
    },
  },
});
