// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  source: 'remote',
    types: true,
    mount: {
      public: "/",
      src: "/dist"
  },
  plugins: [
    '@snowpack/plugin-typescript',
    "@storybook/preset-typescript"
  ],
  buildOptions: {
    out: "_build"
},
optimize: {
  bundle: true,
  minify: true,
  optimize: true
},
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
