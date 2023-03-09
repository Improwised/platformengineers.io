<template>
  <div v-if="home" class="main-container">
    <section>
      <div class="container">
        <div class="row align-items-center justify-content-around">
          <div class="col-md-6 col-lg-5">
            <h1>{{ home.tagline }}</h1>
            <p class="lead">{{ home.description }}</p>
            <a class="btn btn--primary type--uppercase" href="/contact-us">
              <span class="btn__text"> Contact Us </span>
            </a>
          </div>
          <div class="col-6">
            <img alt="Image" :src="$urls.assets(home.main_image)" />
          </div>
        </div>
      </div>
    </section>

    <section class="text-center bg--secondary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <h2>{{ home.services_title }}</h2>
            <p class="lead">
              {{ home.services_description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg--secondary">
      <div class="container">
        <div class="row">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-md-6 d-flex"
          >
            <div class="w-100 feature feature-5 boxed boxed--lg boxed--border">
              <i :class="`icon icon--lg ${service.icon}`" />
              <div class="feature__body">
                <h4>{{ service.title }}</h4>
                <p class="text-dark">
                  {{ service.description }}
                </p>
                <a :href="`/services/${service.slug}`">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <h2>{{ home.whyus_title }}</h2>
            <p class="lead">{{ home.whyus_description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div
            v-for="(why, index) in whyUs"
            :key="index"
            class="col-md-4 d-flex"
          >
            <div class="feature feature-2 boxed boxed--border w-100">
              <i :class="`icon ${why.icon} color--primary`"></i>
              <div class="feature__body">
                <h5>{{ why.title }}</h5>
                <p>{{ why.description | str_limit(200) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space--xs bg--secondary">
      <div class="container">
        <div class="cta cta--horizontal text-center-xs row">
          <div class="col-md-6">
            <h4>Let's Connect</h4>
          </div>
          <div class="col-md-6 text-right text-center-xs">
            <a class="btn btn--primary type--uppercase" href="/contact-us">
              <span class="btn__text">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
          content: process.env.BASE_URL + "/img/logo.png",
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
          content: process.env.BASE_URL + "/img/logo.png",
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
