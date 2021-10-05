const _patch = require("path");
const resolve = (path) => _patch.resolve(__dirname, path);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
};
