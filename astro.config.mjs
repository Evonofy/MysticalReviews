export default /** @type {import('astro').AstroUserConfig} */ ({
  dist: "./dist",
  public: "./public",
  pages: "./src/pages",
  devOptions: {
    hostname: "localhost",
    port: 3000,
  },
  buildOptions: {},
	renderers: ['@astrojs/renderer-preact'],
});