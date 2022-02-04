const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  webpackFinal: async (config) => {
    config.resolve.alias["/public/images"] = path.resolve(
      __dirname,
      "../public/images"
    );

    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": path.resolve(__dirname, "../"),
    };

    config.resolve.roots = [
      path.resolve(__dirname, "../public"),
      "node_modules",
    ];

    return config;
  },
};
