<template>
  <div v-if="home">
    <div class="main-container">
      <div class="hero-bk">
        <Navigation />
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
              <div class="col-7">
                <img alt="Image" src="/img/l13.svg" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="toolBox" class="text-center technologies space--xs o_05">
        <div class="container-fluid">
          <div class="row text-center justify-content-center">
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/linux.png"
                  alt="linux"
                  class="lazyload"
                  title="Linux"
                  loading="lazy"
                />
                <h6>Linux</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/docker.png"
                  alt="docker"
                  class="lazyload"
                  title="Docker"
                  loading="lazy"
                />
                <h6>Docker</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/kubernetes.svg"
                  alt="kubernetes"
                  title="kubernetes"
                  class="lazyload"
                  loading="lazy"
                />
                <h6>Kubernetes</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/helm.png"
                  alt="Helm"
                  class="lazyload"
                  title="Helm"
                  loading="lazy"
                />
                <h6>Helm</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/terraform.svg"
                  alt="Terraforms"
                  class="lazyload"
                  title="Terraform"
                  loading="lazy"
                />
                <h6>Terraform</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/nginx.png"
                  alt="nginx"
                  class="lazyload"
                  title="nginx"
                  loading="lazy"
                />
                <h6>Nginx</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/amazon-web-services-icon.svg"
                  alt="amazon_web_services"
                  class="lazyload"
                  loading="lazy"
                  title="Amazon Web Services"
                />
                <h6>Amazon Web Services</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/google_cloud_platform.png"
                  alt="google_cloud_platform"
                  class="lazyload"
                  loading="lazy"
                  title="Google Cloud Platform"
                />
                <h6>Google Cloud Platform</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <img
                  src="img/technologies/digital_ocean.png"
                  alt="digital_ocean"
                  class="lazyload"
                  loading="lazy"
                  title="DigitalOcean"
                />
                <h6>DigitalOcean</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0" />

      <section class="wave-bk">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2>{{ home.services_title }}</h2>
              <p class="lead">
                {{ home.services_description }}
              </p>
            </div>
            <div
              v-for="(service, index) in services"
              :key="index"
              class="col-md-4 d-flex"
            >
              <div
                class="text-center w-100 feature feature-3 boxed boxed--lg bs-1 rounded d-flex flex-column"
              >
                <div class="mb-4">
                  <nuxt-img
                    :src="$urls.assets(service.icon_as_image)"
                    :alt="service.title"
                    :title="service.title"
                    format="png"
                    loading="lazy"
                    height="80px"
                  />
                </div>
                <h4 class="flex-grow-1">{{ service.title }}</h4>
                <p class="flex-grow-1">
                  {{ service.description }}
                </p>
                <a :href="`/services/${service.slug}`"> Learn More </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wave-bk-reverse bg--">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2>{{ home.whyus_title }}</h2>
              <p class="lead">
                {{ home.whyus_description }}
              </p>
            </div>
            <div
              v-for="(why, index) in whyUs"
              :key="index"
              class="col-md-4 d-flex"
            >
              <div
                class="text-center w-100 feature feature-3 boxed boxed--lg bs-1 rounded d-flex flex-column"
              >
                <div class="mb-4">
                  <nuxt-img
                    :src="$urls.assets(why.image)"
                    :alt="why.title"
                    :title="why.title"
                    format="png"
                    loading="lazy"
                    height="80px"
                  />
                </div>
                <h4 class="flex-grow-1">{{ why.title }}</h4>
                <p class="flex-grow-1">
                  {{ why.description }}
                </p>
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

<style>
.o_05 {
  opacity: 0.5;
}

.hero-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;
}

.hero-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  background: url("/img/bk/bg-3.jpg");
  background: url("/img/a9.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.wave-bk {
  overflow: hidden;
  position: relative;
}

.wave-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -1;
  background: url("/img/wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.wave-bk-reverse {
  overflow: hidden;
  position: relative;
}

.wave-bk-reverse::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -1;
  background: url("/img/wave-reverse.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}
</style>
