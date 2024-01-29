<template>
  <div class="main-container case-studies">
    <div class="case-studies-bk">
      <Navigation />
      <Header title="Case Studies" image="/img/c4.svg" />
    </div>

    <List :list="caseStudies" readmore="/case-studies/" :datetime="true" />
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
</style>
