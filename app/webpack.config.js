const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
  entry : "./static/bundel1.js",
  // entry:  {
  //   main: "./static/bundel1.js",
  //   fontsicon: "./static/bundel2.js",
  // },
  output: {
    path: path.resolve(__dirname, "./static/dist"),
    filename: "index.min.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: "index.min.css",
        // test: /\.min\.css$/i,
        parallel: false,
      }),
    ],
  },
  externals: {
    jquery: "$",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, "./static/")],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.min.css",
    }),
  ],
};
