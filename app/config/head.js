/* eslint-disable no-unused-vars */

import constants from "./constants.js";

// ===================================

const htmlAttrs = {
  lang: "en",
};

// ===================================

const meta = [
  {
    charset: "utf-8",
  },
  {
    "http-equiv": "Content-Language",
    content: "en",
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
  {
    name: "format-detection",
    content: "telephone=no",
  },
  {
    name: "author",
    content: constants.title,
  },
  {
    name: "copyright",
    content: constants.title,
  },
  {
    name: "robots",
    content: "index, follow",
  },
  {
    name: "theme-color",
    content: "#179bfd",
  },
  {
    name: "application-name",
    content: constants.title,
  },
  {
    name: "msapplication-TileColor",
    content: "#FFFFFF",
  },
  {
    name: "msapplication-TileImage",
    content: "/img/favicon/ms-icon-144x144.png",
  },
  {
    name: "msapplication-square70x70logo",
    content: "/img/favicon/ms-icon-70x70.png",
  },
  {
    name: "msapplication-square144x144logo",
    content: "/img/favicon/ms-icon-144x144.png",
  },
  {
    name: "msapplication-square150x150logo",
    content: "/img/favicon/ms-icon-150x150.png",
  },
  {
    name: "msapplication-square310x310logo",
    content: "/img/favicon/ms-icon-310x310.png",
  },
];

// ===================================

const devLinks = [
  {
    href: "/css/bootstrap.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/stack-interface.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/socicon.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/iconsmind.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/theme.css",
    rel: "stylesheet",
    type: "text/css",
    media: "all",
  },
  {
    href: "/css/index.css",
    rel: "stylesheet",
    type: "text/css",
    media: "all",
  },
  {
    href: "/css/font-rubiklato.css",
    rel: "stylesheet",
    type: "text/css",
  },
];

const prodLinks = [
  {
    href: "/dist/index.min.css",
    rel: "stylesheet",
    type: "text/css",
  },
];

const _link = [
  {
    href: "https://fonts.googleapis.com",
    rel: "preconnect",
  },
  {
    href: "https://maps.googleapis.com",
    rel: "preconnect",
  },
  {
    href: "https://www.gstatic.com",
    rel: "preconnect",
  },
  // {
  //   href: "https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i&display=swap",
  //   rel: "stylesheet",
  //   lazyload: true,
  // },
  // {
  //   href: "https://fonts.googleapis.com/css?family=Lato:400,400i,700%7CRubik:300,400,500&display=swap",
  //   rel: "stylesheet",
  //   lazyload: true,
  // },
  // {
  //   href: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
  //   rel: "stylesheet",
  //   lazyload: true,
  // },
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/img/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/img/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/img/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/img/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/img/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/img/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/img/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/img/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/img/favicon/apple-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-16x16.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-96x96.png",
    sizes: "96x96",
  },
  {
    rel: "manifest",
    href: "/manifest.json",
  },
];

// ===================================

const prodScripts = [
  {
    src: "/dist/index.min.js",
    async: true,
    body: true,
  },
];

const structuredLdJsonData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Platform Engineers",
  alternateName: "Platform Engineers",
  url: "https://platformengineers.io/",
  image: "https://platformengineers.io/img/plateform-engineers.png",
  sameAs: [],
};

// ===================================

export default function (mode) {
  if (mode === 'development' || mode === 'staging' ) {
    return null;
  }

  return {
    title: constants.title,
    htmlAttrs,
    meta,
    link: _link,
    script: [
      {
        type: "application/ld+json",
        json: structuredLdJsonData
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-LRC7N9VH4L",
        body: true,
      },
      {
        src: "/google-tag.js",
        body: true,
      }
    ],
  };
}
