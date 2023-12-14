import head from "./config/head.js";

require("dotenv").config(); // eslint-disable-line nuxt/no-cjs-in-config

const CompressionPlugin = require("compression-webpack-plugin"); // eslint-disable-line nuxt/no-cjs-in-config

export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: head(process.env.MODE),

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/urlroutes" },
    { src: "~/plugins/download.js", mode: "server" },
    { src: "~/plugins/hotjar.js", mode: "client" }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      "@nuxtjs/eslint-module",
      {
        fix: true,
      },
    ],

    // https://go.nuxtjs.dev/stylelint
    [
      "@nuxtjs/stylelint-module",
      {
        fix: true,
      },
    ],
    "@nuxt/image",
    "@/modules/sitemapRouteGenerator",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // sitemap
    "@nuxtjs/sitemap",
    "vue-social-sharing/nuxt",
  ],

  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: process.env.BASE_URL + "/sitemap.xml",
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    defaults: {
      lastmod: new Date(),
    },
    trailingSlash: true,
  },

  publicRuntimeConfig: {
    MODE: process.env.MODE,
    BASE_URL: process.env.BASE_URL,
    DATA_URL: process.env.DATA_URL,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.DATA_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },

    extractCSS: {
      ignoreOrder: true,
    },

    cssSourceMap: true,

    plugins: [new CompressionPlugin()],

    extend(config, ctx) {
      config.devtool = "source-map";
    },
  },

  generate: {
    dir: "public",
    fallback: false,
    interval: 2000,
  },

  image: {
    domains: ["data.improwised.com"],
  },
};
