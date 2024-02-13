<template>
  <div v-if="home">
    <div class="main-container">
      <div class="hero-bk">
        <Navigation />
        <section>
          <div class="container">
            <div class="row align-items-center justify-content-around">
              <div
                class="col-md-6 col-12 d-flex align-items-center justify-content-center"
              >
                <div>
                  <h1>{{ home.tagline }}</h1>
                  <p class="lead">{{ home.description }}</p>
                  <a
                    class="btn btn--primary type--uppercase b-30"
                    href="/contact-us/"
                  >
                    <span class="btn__text"> Contact Us </span>
                  </a>
                  <br />
                </div>
              </div>
              <div
                class="col-md-6 col-12 d-flex align-items-center justify-content-center"
              >
               <nuxt-img
                  src="/img/l13.webp"
                  alt="Platform Engineers"
                  class="img-dim"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Technologies />

      <section class="space--xxs">
        <div
          class="px-3 px-sm-0 py-5 py-md-0 d-flex align-items-center justify-content-center text-white as-call-to-action-block flex-wrap flex-md-nowrap"
        >
          <h3 class="p-0 p-md-5 m-0 text-white text-center">
            Let's elevate your application performance and infrastructure cost
            efficiency
          </h3>
          <div class="p-0 p-md-5">
            <a
              href="/assessment/"
              class="btn my-0 my-md-4 px-5 as-call-to-action b-30"
              title="Assessment by platformengineers"
            >
              GET ASSESSMENT
            </a>
          </div>
        </div>
      </section>

      <section class="wave-bk section-padding">
        <div class="container">
          <div class="row">
            <SectionHeading
              :title="home.services_title"
              :description="home.services_description"
            />
            <div
              v-for="(service, index) in services"
              :key="index"
              class="col-md-6 col-lg-4 d-flex mt-5"
            >
              <Card
                :icon-image="service.icon_as_image"
                :title="service.title"
                link-redirect="services"
                :slug="service.slug"
                :description="service.description"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="wave-bk-reverse bg-- section-padding">
        <div class="container">
          <div class="row">
            <SectionHeading
              :title="home.whyus_title"
              :description="home.whyus_description"
            />
            <div
              v-for="(why, index) in whyUs"
              :key="index"
              class="col-md-6 col-lg-4 d-flex mt-5"
            >
              <Card
                :icon-image="why.image"
                :title="why.title"
                :description="why.description"
              />
            </div>
          </div>
        </div>
      </section>

      <!--       <section class="section-padding bg--secondary">
        <div class="container">
          <div class="cta cta--horizontal text-center-xs row">
            <div class="col-6 d-flex align-items-center">
              <h4 class="m-0">Let's Connect</h4>
            </div>
            <div class="col-6 text-right text-center-xs">
              <a
                class="btn btn--primary type--uppercase b-30"
                href="/contact-us/"
              >
                <span class="btn__text">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section> -->

      <section class="px-3 px-sm-0 py-5 as-call-to-action-block as-home">
        <div
          class="container d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap"
        >
          <div>
            <h3 class="mb-3 p-0 text-white">Let's talk about your project</h3>
            <p class="text-white">
              We would love to hear from you! If you're interested in improving
              and scaling your project through our platform engineering
              services, please don't hesitate to get in touch.
            </p>
          </div>
          <div class="pt-3 pb-0 p-md-5">
            <a
              class="type--uppercase btn my-0 my-md-4 px-5 as-call-to-action b-30"
              href="/contact-us/"
            >
              <span class="btn__text"> Contact Us </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Technologies from "@/components/Technologies.vue";
import Card from "@/components/common/Card.vue";
import SectionHeading from "@/components/common/SectionHeading.vue";

export default {
  components: {
    Navigation,
    Technologies,
    Card,
    SectionHeading,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const { data: home } = await app.$axios.$get(app.$urls.home);
    const { data: services } = await app.$axios.$get(app.$urls.services);
    const { data: whyUs } = await app.$axios.$get(app.$urls.whyUs);

    return {
      home,
      services,
      whyUs,
    };
  },
  head() {
    return {
      title: this.home && this.home.seo_title,
      meta: [
        {
          name: "description",
          content: this.home && this.home.seo_description,
        },
        {
          name: "title",
          content: this.home && this.home.seo_title,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: process.env.BASE_URL + "/",
        },
        {
          property: "og:title",
          content: this.home && this.home.seo_title,
        },
        {
          property: "og:description",
          content: this.home && this.home.seo_description,
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "/img/plateform-engineers.png",
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
          content: this.home && this.home.seo_title,
        },
        {
          property: "twitter:description",
          content: this.home && this.home.seo_description,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/plateform-engineers.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: process.env.BASE_URL + "/",
        },
      ],
    };
  },
};
</script>
<style>
.wave-bk::before {
  opacity: 0.3;
  background: url("/img/wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
</style>
