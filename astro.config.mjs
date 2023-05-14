import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import image from "@astrojs/image"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  site: "https://mystical-reviews.vercel.app",
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    image(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date("2023-05-14"),
    }),
    prefetch(),
  ],
})
