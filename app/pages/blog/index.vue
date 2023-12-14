<template>
  <div>
    <div class="blog-bk">
      <Navigation />
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <h1>Blog</h1>
          </div>
          <div class="col-md-6 text-right">
            <nuxt-img
              src="/img/blog.png"
              alt="Case Studies | Platform Engineers"
              format="png"
              loading="lazy"
              width="540px"
              class="img-dim"
            />
          </div>
        </div>
      </div>
    </div>

    <section v-if="blogList && blogList.length" class="bg--">
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
                  height="300px"
                  loading="lazy"
                  format="png"
                />
              </a>
              <div class="feature__body p-4">
                <a :href="`/blog/${blog.slug}`" class="t-hover">
                  <h5 class="blog-title" :title="blog.title">
                    {{ blog.title }}
                  </h5>
                </a>
                <div class="d-flex align-items-center mt-3">
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
                <a :href="`/blog/${blog.slug}`" class="d-lg-none">
                  Read More
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation,
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

    const blogTitle = "Blog | | Platform Engineers";
    const blogDescription = "Blog | Platform Engineers";
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
.blog-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.blog-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
  background: url("/img/blog-bk-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .blog-bk {
    border-radius: 0 0 30px 30px;
  }
}

.t-hover:hover {
  text-decoration-color: #179bfd;
}

.t-hover h5 {
  line-height: 1.5 !important;
}

.t-hover:hover h5 {
  color: #179bfd;
}

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.lh-1 {
  line-height: 1;
}

.author-s {
  max-width: 40px;
  max-height: 40px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px;
}

.blog-title {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
