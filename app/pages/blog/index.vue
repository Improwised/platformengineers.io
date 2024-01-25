<template>
  <div>
    <div class="blog-bk">
      <Navigation />
      <Header title="Blog" image="/img/blog.png" />
    </div>

    <List :list="blogList" readmore="/blog/" :showavtar="true" />
    <!-- <section v-if="blogList && blogList.length" class="bg--">
      <div class="container">
        <div class="row">
          <div
            v-for="(blog, index) in blogList"
            :key="index"
            class="masonry__item col-lg-4 col-md-6"
          >
            <article class="b-30 bs-1">
              <a
                :href="`/blog/${blog.slug}`"
                class="block d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  v-if="blog.image"
                  :src="$urls.assets(blog.image.id)"
                  :alt="blog.title"
                  :title="blog.title"
                  height="300"
                  width="300"
                  loading="lazy"
                  format="png"
                />
              </a>
              <div class="feature__body p-4">
                <a :href="`/blog/${blog.slug}`" class="t-hover">
                  <h2 class="blog-title h5" :title="blog.title">
                    {{ blog.title }}
                  </h2>
                </a>
                <div class="d-flex align-items-center mt-1">
                  <div
                    class="d-flex align-items-center mr-2"
                    style="border-radius: 200px"
                  >
                    <nuxt-img
                      v-if="blog.user_created.avatar"
                      :src="$urls.assets(blog.user_created.avatar)"
                      :alt="blog.title"
                      :title="blog.title"
                      format="png"
                      height="40"
                      width="32"
                      class="p-0 m-0 rounded author-s"
                    />
                  </div>
                  <div>
                    <strong class="m-0 p-0 lh-1">
                      {{ blog.user_created.first_name }}
                      {{ blog.user_created.last_name }}
                    </strong>
                    <div class="lh-1">
                      {{ blog.date_created | formatDateTime }} |
                      {{ blog.time_to_read }}
                    </div>
                  </div>
                </div>
                <p class="m-0"></p>
              </div>
              <a :href="`/blog/${blog.slug}`" class="d-lg-none color">
                Read More
              </a>
            </article>
          </div>
        </div>
      </div>
    </section> -->
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
