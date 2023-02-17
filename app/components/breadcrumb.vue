<template>
  <ol class="breadcrumbs">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li v-for="(crumb, index) in crumbs" :key="index">
      <NuxtLink v-if="index < crumbs.length - 1" :to="crumb.path">{{
        $route.fullPath === crumb.path && title !== null ? title : crumb.title
      }}</NuxtLink>
      <span v-else>{{
        $route.fullPath === crumb.path && title !== null ? title : crumb.title
      }}</span>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];

      let path = "";

      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);

        if (match.name !== null) {
          crumbs.push({
            title: this.$titlecase(param),
            ...match,
          });
        }
      });

      return crumbs;
    },
  },
};
</script>
