/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  bracketSameLine: false,
  tailwindConfig: "./tailwind.config.cjs",
}
