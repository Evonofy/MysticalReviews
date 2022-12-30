import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  publicDir: "public",
  adapter: vercel(),
});
