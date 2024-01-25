<template>
  <div class="main-container case-studies">
    <div class="case-studies-bk">
      <Navigation />
      <Header title="Case Studies" image="/img/c4.svg" />
    </div>

    <section v-if="caseStudies && caseStudies.length" class="bg--secondary">
      <div class="container">
        <div class="row">
          <div
            v-for="(caseStudie, index) in caseStudies"
            :key="index"
            class="masonry__item col-lg-4 col-md-6"
          >
            <article class="b-30 bs-1">
              <a
                :href="`/case-studies/${caseStudie.slug}`"
                class="block d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  v-if="caseStudie.image"
                  :src="$urls.assets(caseStudie.image.id)"
                  :alt="caseStudie.title"
                  :title="caseStudie.title"
                  height="245"
                  loading="lazy"
                  format="png"
                />
              </a>
              <div class="feature__body p-4">
                <a :href="`/case-studies/${caseStudie.slug}`" class="t-hover">
                  <h5>{{ caseStudie.title }}</h5>
                </a>
                <p class="m-0">
                  {{ caseStudie.date_created | formatDateTime }}
                </p>
                <a :href="`/case-studies/${caseStudie.slug}`" class="d-lg-none">
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
import Header from "@/components/common/Header.vue";

export default {
  components: {
    Navigation,
    Header,
  },
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  layout: "theme",
  async asyncData({ app, params, store }) {
    const caseStudies = await app.$axios.$get(app.$urls.caseStudies);
    return { caseStudies: caseStudies.data };
  },
  head() {
    const caseStudiesTitle = "Case Studies | Platform Engineers";
    const caseStudiesDescription = "Case Studies | Platform Engineers";

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
@media only screen and (max-width: 600px) {
  .case-studies-bk {
    border-radius: 0 0 30px 30px;
  }
}

.t-hover h5 {
  line-height: 1.5;
}

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}
</style>
