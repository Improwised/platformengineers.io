<template>
  <div>
    <div v-if="$config.MODE === 'development'">
      <link href="/theme/css/bootstrap.css" rel="stylesheet" type="text/css" />
      <link
        href="/theme/css/stack-interface.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/theme/css/socicon.css" rel="stylesheet" type="text/css" />
      <link href="/theme/css/iconsmind.css" rel="stylesheet" type="text/css" />
      <link href="/theme/css/theme.css" rel="stylesheet" type="text/css" />

      <link href="/css/custom.css" rel="stylesheet" type="text/css" />
      <link href="/css/pages.css" rel="stylesheet" type="text/css" />
      <link
        href="/theme/css/font-rubiklato.css"
        rel="stylesheet"
        type="text/css"
      />
    </div>
    <div v-else>
      <link rel="stylesheet" href="/dist/index.min.css" lazyload />
    </div>
    <a id="start" rel="nofollow" href="javscript:void(0);"></a>
    <nuxt />
    <Footer />
    <backToTop />
    <script src="/theme/js/jquery-3.1.1.min.js"></script>
    <script src="/theme/js/scripts.js"></script>
    <script src="/js/contactus.js"></script>
    <script>
      (function (d, t) {
        var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        g.src = "https://support.platformengineers.io/embed.js";
        s.parentNode.insertBefore(g, s);
        g.onload = function () {
          new window.ChaskiqMessengerEncrypted({
            domain: "https://support.platformengineers.io",
            ws: "wss://support.platformengineers.io/cable",
            app_id: "BfzTsCS7K4vKytFvEP5Yv7Fd",
            data: "YOUR_ENCRYPTED_JWE_DATA",
            lang: "USER_LANG_OR_DEFAULTS_TO_BROWSER_LANG",
          });
        };
      })(document, "script");
    </script>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import backToTop from "@/components/backToTop.vue";

export default {
  components: {
    Footer,
    backToTop,
  },
};
</script>
