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
      <link rel="stylesheet" type="text/css" href="/dist/index.min.css" />
    </div>
    <a
      id="start"
      rel="nofollow"
      aria-label="start point of page"
      href="javscript:void(0);"
    ></a>
    <nuxt />
    <Footer />
    <backToTop />
    <script src="/theme/js/scripts.js"></script>
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
