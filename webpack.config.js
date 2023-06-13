const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

// TODO: добавить в externals react-router
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "andy-inc",
    projectName: "navbar-mf",
    webpackConfigEnv,
    argv,
    orgPackagesAsExternal: false,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      ...defaultConfig.resolve,
      alias: {
        ...defaultConfig.resolve?.alias,
        src: path.resolve(__dirname, "src"),
      },
    },
    externals: ["@mui/material", "@mui/icons-material"]
  });
};
