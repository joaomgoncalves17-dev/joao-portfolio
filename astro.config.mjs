// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  // TODO: set to the real domain once chosen (used for canonical + hreflang URLs).
  site: "https://example.com",
  integrations: [icon()],
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
