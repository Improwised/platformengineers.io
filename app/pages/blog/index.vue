<template>
  <div>
    <div class="blog-bk">
      <Navigation />
      <Header title="Blog" image="/img/blog.png" />
    </div>

    <List :list="blogList" readmore="/blog/" :showavtar="true" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/common/Header.vue";
import List from "@/components/common/List.vue";

export default {
  components: {
    Navigation,
    Header,
    List,
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const blogList = await app.$axios.$get(app.$urls.blogs);

    return { blogList: blogList.data };
  },
  head() {
    const image = this.$img("/img/blog-bk-1.png", {
      format: "png",
      height: "400px",
    });

    const blogTitle =
      "Blogs | Platform Engineering in the Multi-Cloud Era: A Guide to Success";
    const blogDescription =
      "Elevate your platform engineering game with this comprehensive guide. We cover key metrics for tracking progress, golden paths for internal platforms, and strategies for thriving in the multi-cloud era.";
    return {
      title: blogTitle,
      meta: [
        {
          name: "description",
          content: blogDescription,
        },
        {
          name: "title",
          content: blogTitle,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: process.env.BASE_URL + this.$route.path + "/",
        },
        {
          property: "og:title",
          content: blogTitle,
        },
        {
          property: "og:description",
          content: blogDescription,
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + image,
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:site",
          content: "",
        },
        {
          property: "twitter:creator",
          content: "",
        },
        {
          property: "twitter:title",
          content: blogTitle,
        },
        {
          property: "twitter:description",
          content: blogDescription,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + image,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: process.env.BASE_URL + this.$route.path + "/",
        },
      ],
    };
  },
};
</script>

<style>
.t-hover h5 {
  line-height: 1.5 !important;
}

.lh-1 {
  line-height: 1;
}
</style>
