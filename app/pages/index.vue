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
                    href="/contact-us"
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
                  src="/img/l13.svg"
                  alt="Platform Engineers"
                  format="png"
                  loading="lazy"
                  height="456px"
                  class="img-dim"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        id="toolBox"
        class="text-center technologies space--xs o_05 pb-0"
      >
        <div class="container-fluid">
          <div class="row text-center justify-content-center">
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/linux.png"
                  alt="Linux | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Linux"
                  height="40px"
                />
                <h6>Linux</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/docker.png"
                  alt="Docker | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Docker"
                  height="40px"
                />
                <h6>Docker</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/kubernetes.svg"
                  alt="Kubernetes | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Kubernetes"
                  height="40px"
                />
                <h6>Kubernetes</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/helm.png"
                  alt="Helm | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Helm"
                  height="40px"
                />
                <h6>Helm</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/terraform.svg"
                  alt="Terraforms | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Terraforms"
                  height="40px"
                />
                <h6>Terraform</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/nginx.png"
                  alt="Nginx | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Nginx"
                  height="40px"
                />
                <h6>Nginx</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/amazon-web-services-icon.svg"
                  alt="Amazon Web Services | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Amazon Web Services"
                  height="40px"
                />
                <h6>Amazon Web Services</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/google_cloud_platform.png"
                  alt="Google Cloud Platform | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Google Cloud Platform"
                  height="40px"
                />
                <h6>Google Cloud Platform</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/technologies/digital_ocean.png"
                  alt="Digital Ocean | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Digital Ocean"
                  height="40px"
                />
                <h6>DigitalOcean</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="py-5">
        <div
          class="px-3 px-sm-0 py-5 py-md-0 d-flex align-items-center justify-content-center text-white as-call-to-action-block flex-wrap flex-md-nowrap"
        >
          <h3 class="p-0 p-md-5 m-0 text-white text-center">
            Let's elevate your application performance and infrastructure cost
            efficiency
          </h3>
          <div class="p-0 p-md-5">
            <a
              href="/assessment"
              class="btn my-0 my-md-4 px-5 as-call-to-action b-30"
              title="Assessment by platformengineers"
            >
              GET ASSESSMENT
            </a>
          </div>
        </div>
      </div>

      <section class="wave-bk pt-0">
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
              class="col-md-6 col-lg-4 d-flex mt-5"
            >
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"
              >
                <div class="mb-4 zi-0">
                  <nuxt-img
                    :src="$urls.assets(service.icon_as_image)"
                    :alt="service.title"
                    :title="service.title"
                    format="png"
                    loading="lazy"
                    height="80px"
                  />
                </div>
                <a :href="`/services/${service.slug}`" class="t-hover zi-0">
                  <h5 class="mb-0">{{ service.title }}</h5>
                </a>
                <p class="m-0 zi-0">
                  {{ service.description }}
                </p>
                <a
                  :href="`/services/${service.slug}`"
                  class="d-lg-none mt-4 mb-0 text-center zi-0"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <div
        class="d-flex align-items-center justify-content-center as-call-to-action-block"
        :style="`background-image: url(${callToAction})`"
      >
        <div
          class="d-flex align-items-center align-self-stretch p-3 p-sm-5 text-center"
        >
          <div>
            <h2 class="text-white">
              Assessment for
              <span class="as-color-o">Application Performance</span> and
              <span class="as-color-o">Infrastructure Cost</span> efficiency.
            </h2>
            <button
              class="btn px-5 as-call-to-action b-30 m-0"
              @click="scrollPricingSection"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>

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
              class="col-md-6 col-lg-4 d-flex mt-5"
            >
              <div
                class="text-center w-100 p-5 bs-1 b-30 d-flex flex-column card-svg pos-r"
              >
                <div class="mb-4 zi-0">
                  <nuxt-img
                    :src="$urls.assets(why.image)"
                    :alt="why.title"
                    :title="why.title"
                    format="png"
                    loading="lazy"
                    height="80px"
                  />
                </div>
                <h5 class="mb-0 zi-0">{{ why.title }}</h5>
                <p class="zi-0">
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
            <div class="col-6 d-flex align-items-center">
              <h4 class="m-0">Let's Connect</h4>
            </div>
            <div class="col-6 text-right text-center-xs">
              <a
                class="btn btn--primary type--uppercase b-30"
                href="/contact-us"
              >
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
  data() {
    return {
      callToAction: this.$img("/img/as/call-to-action/background.svg", {
        format: "png",
        width: "378",
        quality: "80",
      }),
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
.o_05 {
  opacity: 0.5;
}

.hero-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 150px 150px;
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
  background: url("/img/a9.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .hero-bk {
    border-radius: 0 0 30px 30px;
  }
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
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.45),
    -25px 0 20px -20px rgba(0, 0, 0, 0.45);

  /*  box-shadow: rgba(0, 0, 0, 0.3) -30px 0 30px 0; */

  /*  box-shadow: -25px 0 20px -20px rgba(0, 0, 0, 0.45); */
}

.t-hover:hover h5 {
  color: #179bfd;
}

.t-hover:hover {
  text-decoration-color: #179bfd;
}

.card-svg {
  overflow: hidden;
  position: relative;
}

.card-svg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 0;
  background: url("/img/card47.png") white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.as-call-to-action-block {
  background-color: #093097;
  background-image: url("/img/as/call-to-action/background.svg");
}

.btn.as-call-to-action {
  color: #212121;
  height: auto;
  padding: 10px;
  outline: none;
  border-width: 2px;
  border-color: #ff900a;
  background-color: #ff900a;
}

.btn.as-call-to-action:hover {
  color: #212121;
  outline: none;
  border-color: #ff900a;
  background-color: #ff900a;
}

.as-color-o {
  color: #ff900a;
}

.as-color-o:hover {
  color: #ff900a;
}
</style>
