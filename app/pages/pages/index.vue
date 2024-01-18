<template>
  <div class="main-container case-studies">
    <div class="case-studies-bk">
      <Navigation />
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <h1>Landing Pages</h1>
          </div>
          <div class="col-md-6 text-right">
            <nuxt-img
              src="/img/blog.png"
              alt="Landing Pages | Platform Engineers"
              format="png"
              loading="lazy"
              width="540px"
              class="img-dim"
            />
          </div>
        </div>
      </div>
    </div>

    <section v-if="pages && pages.length" class="bg--secondary">
      <div class="container">
        <div class="row">
          <div
            v-for="(page, index) in pages"
            :key="index"
            class="masonry__item col-lg-4 col-md-6"
          >
            <article class="b-30 bs-1">
              <a
                :href="`/pages/${page.slug}`"
                class="block d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  v-if="page && page.hero_image && page.hero_image.id"
                  :src="$urls.assets(page.hero_image.id)"
                  :alt="`${page.hero_image.title} | Platform Engineers`"
                  format="png"
                  loading="lazy"
                  height="300px"
                />
              </a>
              <div class="feature__body p-4">
                <a :href="`/pages/${page.slug}`" class="t-hover">
                  <h5 class="blog-title text-center" :title="page.title">
                    {{ page.title }}
                  </h5>
                </a>

                <a :href="`/pages/${page.slug}`" class="d-lg-none">
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
    const pages = await app.$axios.$get(app.$urls.landing_pages_for_seo);

    return { pages: pages.data };
  },
  head() {
    const caseStudiesTitle = "Landing Pages | Platform Engineers";
    const caseStudiesDescription = "Landing Pages | Platform Engineers";

    const image = this.$img("/img/c4.svg", {
      format: "png",
      height: "400px",
    });

    return {
      title: caseStudiesTitle,
      meta: [
        {
          name: "description",
          content: caseStudiesDescription,
        },
        {
          name: "title",
          content: caseStudiesTitle,
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
          content: caseStudiesTitle,
        },
        {
          property: "og:description",
          content: caseStudiesDescription,
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
          content: caseStudiesTitle,
        },
        {
          property: "twitter:description",
          content: caseStudiesDescription,
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
