<template>
  <div>
    <div class="main-container">
      <div class="industry-bk">
        <Navigation />
        <div>
          <div class="container">
            <div class="row py-2">
              <div
                class="col-md-6 d-flex align-items-center justify-content-center"
              >
                <div>
                  <h1>Industries</h1>
                  <p class="lead">
                    If you are looking to improve the scalability, reliability,
                    security, and cost-efficiency of your applications and
                    infrastructure, then platform engineering is a good option
                    to consider.
                  </p>
                  <a
                    class="btn btn--primary type--uppercase b-30"
                    href="/contact-us"
                  >
                    <span class="btn__text"> Contact Us </span>
                  </a>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  src="/img/about-us-2.svg"
                  alt="About us | Platform Engineers"
                  format="png"
                  loading="lazy"
                  height="400px"
                  class="img-dim"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="m-0" />

      <hr class="m-0" />

      <section v-if="industriesNames && industriesNames.length" class="bg--">
        <div class="container">
          <div class="row">
            <div
              v-for="(industry, index) in industriesNames"
              :key="index"
              class="masonry__item col-lg-4 col-md-6"
            >
              <article class="b-30 bs-1">
                <a
                  :href="`/industries/${industry.slug}`"
                  class="industry d-flex align-items-center justify-content-center"
                >
                  <nuxt-img
                    v-if="industry.image"
                    :src="$urls.assets(industry.image)"
                    :alt="industry.title"
                    :title="industry.title"
                    width="100%"
                    loading="lazy"
                    format="png"
                  />
                </a>
                <div class="feature__body px-5 py-4 text-center">
                  <a :href="`/industries/${industry.slug}`" class="t-hover">
                    <h5>{{ industry.title }}</h5>
                  </a>
                  <p class="flex-grow-1 m-0">
                    {{ industry.description }}
                  </p>

                  <p class="m-0"></p>
                  <a :href="`/industries/${industry.slug}`" class="d-lg-none">
                    Read More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0" />

      <section class="text-center border-top bg--">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="cta">
                <h2>Want to know more about us?</h2>
                <a
                  class="btn btn--primary type--uppercase b-30"
                  href="/contact-us"
                  title="contact"
                >
                  <span class="btn__text"> Contact us </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const { data: industriesNames } = await app.$axios.$get(
      app.$urls.industriesNames
    );

    return {
      industriesNames,
    };
  },

  head() {
    return {
      title: "industries",
      meta: [
        {
          name: "description",
          content:
            "If you are looking to improve the scalability, reliability, security, and cost-efficiency of your applications and infrastructure, then platform engineering is a good option to consider",
        },
        {
          name: "title",
          content: "industries",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://platformengineers.io/industries/",
        },
        {
          property: "og:title",
          content: "industries",
        },
        {
          property: "og:description",
          content:
            "If you are looking to improve the scalability, reliability, security, and cost-efficiency of your applications and infrastructure, then platform engineering is a good option to consider.",
        },
        // {
        //   property: "og:image",
        //   content: process.env.BASE_URL + image,
        // },
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
          content: "industries",
        },
        {
          property: "twitter:description",
          content:
            "If you are looking to improve the scalability, reliability, security, and cost-efficiency of your applications and infrastructure, then platform engineering is a good option to consider.",
        },
        // {
        //   property: "twitter:image",
        //   content: process.env.BASE_URL + image,
        // },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://platformengineers.io/industries/",
        },
      ],
    };
  },
};
</script>

<style>
.industry-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.industry-bk::before {
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
  .industry-bk {
    border-radius: 0 0 30px 30px;
  }
}

.masonry__item {
  display: flex;
}

.t-hover:hover {
  text-decoration-color: #179bfd;
}

.t-hover:hover h5 {
  color: #179bfd;
}

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}
</style>
