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
    <GoogleAnalyticsV4 v-if="$config.MODE !== 'development'" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import backToTop from "@/components/backToTop.vue";
import GoogleAnalyticsV4 from "@/components/GoogleAnalyticsV4.vue";
export default {
  components: {
    Footer,
    backToTop,
    GoogleAnalyticsV4,
  },
};
</script>
