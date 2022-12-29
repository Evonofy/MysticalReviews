import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: "MysticalReviews",
  output: "server",
  publicDir: "public",
  adapter: vercel(),
});
