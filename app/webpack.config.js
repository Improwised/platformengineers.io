const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin }  = require("purgecss-webpack-plugin"); // Add this line for purge
const glob = require("glob-all"); // Add this line for purge


module.exports = {
  mode: "production",
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
  entry: "./static/bundel.js",
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
    new PurgeCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, './layouts/**/*.vue'),
        path.join(__dirname, './components/**/*.vue'),
        path.join(__dirname, './pages/**/*.vue'),
        path.join(__dirname, './plugins/**/*.js'),
      
      ]),
      styleExtensions: ['.css'],
      whitelist: ["html", "body"],
    }),
  ],
};
