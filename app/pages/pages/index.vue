<template>
  <div>
    <!-- TODO: Need to redesign page based on SEO expert Vision -->
    <div v-for="page in pages" :key="page.index">
      <a :href="`/pages/${page.slug}`">{{ page.slug }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const pages = await app.$axios.$get(app.$urls.landing_pages_for_seo);

    return { pages: pages.data };
  },
};
</script>
