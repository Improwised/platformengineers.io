<template>
  <div class="main-container case-studies">
    <div class="case-studies-bk">
      <Navigation />
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <h1>Case Studies</h1>
            <!-- <p class="m-0" style="font-size: 18px; color: #724fe9">
              Powering innovation with expertise
            </p>
            <p style="font-size: 16px; max-width: 300px">
              Our platform engineers are driven to solve your challenges and
              build tomorrow's solutions.
            </p> -->
          </div>
          <div class="col-md-6 text-right">
            <!-- <img
              v-if="service && service.page_image && service.page_image.id"
              alt="Image"
              :src="$urls.assets(service.page_image.id)"
              height="400px"
            /> -->
            <img alt="Image" src="/img/c4.svg" height="400px" />
          </div>
        </div>
      </div>
    </div>

    <section v-if="caseStudies && caseStudies.length" class="bg--secondary">
      <div class="container">
        <div class="row">
          <div
            v-for="(caseStudie, index) in caseStudies"
            :key="index"
            class="masonry__item col-lg-4 col-md-6"
          >
            <article class="feature feature-1 border rounded">
              <a
                href="#"
                class="block d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  v-if="caseStudie.image"
                  :src="$urls.assets(caseStudie.image.id)"
                  :alt="caseStudie.title"
                  :title="caseStudie.title"
                  width="100%"
                  height="245"
                  loading="lazy"
                  format="png"
                />
              </a>
              <div class="feature__body boxed">
                <span>{{ caseStudie.date_created | formatDateTime }}</span>
                <h5>{{ caseStudie.title }}</h5>
                <a :href="`/case-studies/${caseStudie.slug}`"> Read More </a>
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

    // const ids = [];
    // caseStudies.data.forEach((d) => {
    //   const { id } = d.document;
    //   ids.push(id);
    // });

    // if (
    //   store.state.generate &&
    //   caseStudies &&
    //   caseStudies.data &&
    //   caseStudies.data.length
    // ) {
    //   try {
    //     await app.$download(ids);
    //   } catch (error) {
    //     console.log("error", error); // eslint-disable-line no-console
    //   }
    // }

    return { caseStudies: caseStudies.data };
  },
  head() {
    const caseStudiesTitle = "";
    const caseStudiesDescription = "";
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
          content: process.env.BASE_URL + "/img/logo.png",
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:site",
          content: "@improwised",
        },
        {
          property: "twitter:creator",
          content: "@improwised",
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
          content: process.env.BASE_URL + "/img/logo.png",
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
.case-studies-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.case-studies-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  z-index: -1;
  background: url("/img/a112.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
</style>
