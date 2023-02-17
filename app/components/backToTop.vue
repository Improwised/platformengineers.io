<template>
  <a
    v-smooth-scroll
    class="back-to-top inner-link"
    href="#start"
    data-scroll-class="100vh:active"
    title="click & go to top of the page"
  >
    <i class="stack-interface stack-up-open-big"></i>
  </a>
</template>
<script>
import Vue from "vue";
import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);
export default {};
</script>
