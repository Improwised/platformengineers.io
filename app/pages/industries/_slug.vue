<template>
  <div v-if="home">
    <div class="main-container">
      <div class="hero-bk">
        <Navigation />
        <div>
          <div class="container">
            <div class="row py-2">
              <div
                class="col-md-6 d-flex align-items-center justify-content-center"
              >
                <div>
                  <h1>eCommerce</h1>
                  <p class="lead">
                    Platform engineers in the e-commerce industry are
                    responsible for designing, developing, and maintaining the
                    platforms that support the online shopping experience of
                    customers. They also work on ensuring the security and
                    scalability of these platforms.
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

      <!-- option 1 list view -->
      <!-- <section>
        <div class="container">
          <h2 class="text-center">Common Use Cases</h2>
          <div class="row">
            <div
              class="col-sm-10 col-sm-offset-1 col-md-8 offset-md-2 text-left lead"
            >
              <strong
                >Building and maintaining a scalable and reliable
                infrastructure:
              </strong>
              <p class="pt-2">
                Ecommerce websites and applications need to be able to handle a
                large number of users and transactions. Platform engineers need
                to have expertise in cloud computing and other technologies in
                order to build and maintain a scalable and reliable
                infrastructure for ecommerce applications.
              </p>
              <strong class="m-0 p-0 lh-1"
                >Deploying and scaling ecommerce applications:
              </strong>
              <p class="pt-2">
                Platform engineers need to be able to deploy and scale ecommerce
                applications quickly and efficiently. This requires expertise in
                tools and technologies such as Kubernetes and Docker.
              </p>
              <strong class="m-0 p-0 lh-1"
                >Managing and monitoring ecommerce applications:
              </strong>
              <p class="pt-2">
                Platform engineers need to be able to manage and monitor
                ecommerce applications to ensure that they are running smoothly
                and efficiently. This requires the use of tools and technologies
                such as Prometheus and Grafana.
              </p>
              <strong class="m-0 p-0 lh-1"
                >Securing ecommerce applications:
              </strong>
              <p class="pt-2">
                Platform engineers need to ensure that ecommerce applications
                are secure from cyberattacks. This requires expertise in
                security best practices and technologies such as firewalls and
                intrusion detection systems.
              </p>
            </div>
          </div>
        </div>
      </section> -->
      <!--option1 list view end -->

      <hr class="m-0" />

      <!-- option 2 simple card view -->
      <!-- <section id="services" class="bg--secondary services space--xs">
        <div class="container">
          <div class="row mb-5">
            <div class="col-sm-12">
              <h2 class="mb-0 text-center">Common Use Cases</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div
                class="feature feature-3 boxed boxed--lg boxed--border b-30 bs-1"
              >
                <h4>Building and maintaining a scalable infrastructure:</h4>

                <p>
                  Ecommerce websites and applications need to be able to handle
                  a large number of users and transactions. Platform engineers
                  need to have expertise in cloud computing.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div
                class="feature feature-3 boxed boxed--lg boxed--border b-30 bs-1"
              >
                <h4>Deploying and scaling ecommerce applications:</h4>

                <p>
                  Platform engineers need to be able to deploy and scale
                  ecommerce applications quickly and efficiently. This requires
                  expertise in tools and technologies such as Kubernetes and
                  Docker.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div
                class="feature feature-3 boxed boxed--lg boxed--border b-30 bs-1"
              >
                <h4>Managing and monitoring ecommerce applications:</h4>

                <p>
                  Platform engineers need to be able to manage and monitor
                  ecommerce applications to ensure that they are running
                  smoothly and efficiently. This requires the use of tools and
                  technologies such as Prometheus and Grafana.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div
                class="feature feature-3 boxed boxed--lg boxed--border b-30 bs-1"
              >
                <h4>Securing ecommerce applications:</h4>

                <p>
                  Platform engineers need to ensure that ecommerce applications
                  are secure from cyberattacks. This requires expertise in
                  security best practices and technologies such as firewalls and
                  intrusion detection systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <!--option 2 card view end -->

      <!-- option3 like service start -->
      <section class="wave-bk">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2>Common Use Cases</h2>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">
                  Building and maintaining a scalable infrastructure:
                </h4>

                <p class="flex-grow-1 m-0">
                  Ecommerce websites and applications need to be able to handle
                  a large number of users and transactions. Platform engineers
                  need to have expertise in cloud computing and other
                  technologies in order to build and maintain a scalable and
                  reliable infrastructure for ecommerce applications.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">
                  Deploying and scaling ecommerce applications:
                </h4>

                <p class="flex-grow-1 m-0">
                  Platform engineers need to be able to deploy and scale
                  ecommerce applications quickly and efficiently. This requires
                  expertise in tools and technologies such as Kubernetes and
                  Docker.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">
                  Managing and monitoring ecommerce applications:
                </h4>

                <p class="flex-grow-1 m-0">
                  Platform engineers need to be able to manage and monitor
                  ecommerce applications to ensure that they are running
                  smoothly and efficiently. This requires the use of tools and
                  technologies such as Prometheus and Grafana.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">
                  Securing ecommerce applications:
                </h4>

                <p class="flex-grow-1 m-0">
                  Platform engineers need to ensure that ecommerce applications
                  are secure from cyberattacks. This requires expertise in
                  security best practices and technologies such as firewalls and
                  intrusion detection systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- option3 like service end -->

      <!-- <section>
        <div class="container">
          <h2 class="text-center">Benefits</h2>
          <div class="row">
            <div
              class="col-sm-10 col-sm-offset-1 col-md-8 offset-md-2 text-left lead"
            >
              <strong> Increased speed to market:</strong>
              <p class="pt-2">
                Platform engineering can help e-commerce businesses to deliver
                new features and products faster by providing a standardized and
                automated platform for development and deployment. This can be a
                major advantage in a competitive market where businesses need to
                be able to quickly respond to changes in customer demand.
              </p>
              <strong> Improved scalability:</strong>
              <p class="pt-2">
                Platform engineering can help e-commerce businesses to scale
                their operations more easily by providing a flexible and
                adaptable platform that can be easily scaled up or down as
                needed. This is important for businesses that experience
                seasonal spikes in traffic or that need to be able to handle
                large volumes of orders.
              </p>
              <strong> Enhanced security:</strong>
              <p class="pt-2">
                Platform engineering can help e-commerce businesses to improve
                the security of their systems by providing a centralized
                platform for managing security policies and controls. This can
                help to protect businesses from data breaches and other security
                threats.
              </p>
              <strong> Reduced costs:</strong>
              <p class="pt-2">
                Platform engineering can help e-commerce businesses to reduce
                their costs by providing a more efficient way to develop and
                deploy applications. This can be achieved by reducing the need
                for manual tasks, such as provisioning infrastructure and
                managing security.
              </p>
              <strong> Improved developer productivity:</strong>
              <p class="pt-2">
                Platform engineering can help to improve the productivity of
                developers by providing them with a self-service platform that
                they can use to build and deploy applications. This can free up
                developers to focus on more creative and strategic work.
              </p>
            </div>
          </div>
        </div>
      </section> -->

      <hr class="m-0" />

      <section class="wave-bk">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2>Benefits</h2>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">Increased speed to market:</h4>

                <p class="flex-grow-1 m-0">
                  Platform engineering can help e-commerce businesses to deliver
                  new features and products faster by providing a standardized
                  and automated platform for development and deployment. This
                  can be a major advantage in a competitive market where
                  businesses need to be able to quickly respond to changes in
                  customer demand.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">Improved scalability:</h4>

                <p class="flex-grow-1 m-0">
                  Platform engineering can help e-commerce businesses to scale
                  their operations more easily by providing a flexible and
                  adaptable platform that can be easily scaled up or down as
                  needed. This is important for businesses that experience
                  seasonal spikes in traffic or that need to be able to handle
                  large volumes of orders.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">Enhanced security:</h4>

                <p class="flex-grow-1 m-0">
                  Platform engineering can help e-commerce businesses to improve
                  the security of their systems by providing a centralized
                  platform for managing security policies and controls. This can
                  help to protect businesses from data breaches and other
                  security threats.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">Reduced costs:</h4>

                <p class="flex-grow-1 m-0">
                  Platform engineering can help e-commerce businesses to reduce
                  their costs by providing a more efficient way to develop and
                  deploy applications. This can be achieved by reducing the need
                  for manual tasks, such as provisioning infrastructure and
                  managing security.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex mt-5">
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
              >
                <div class="mb-4"></div>

                <h4 class="flex-grow-1 mb-2">
                  Improved developer productivity:
                </h4>

                <p class="flex-grow-1 m-0">
                  Platform engineering can help to improve the productivity of
                  developers by providing them with a self-service platform that
                  they can use to build and deploy applications. This can free
                  up developers to focus on more creative and strategic work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0" />

      <section id="toolBox" class="text-center technologies space--xs">
        <h2>Companies</h2>
        <div class="container-fluid o_05">
          <div class="row text-center justify-content-center">
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/companies/amazon(2).svg"
                  alt="Amazon | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Amazon"
                  height="50px"
                  class="mx-5"
                />
                <h6>Amazon</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/companies/ebay.png"
                  alt="eBay | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="eBay"
                  height="60px"
                  class="mx-5"
                />
                <h6>eBay</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/companies/walmart.png"
                  alt="Walmart | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Walmart"
                  height="70px"
                  class="mx-5"
                />
                <h6>Walmart</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/companies/target.png"
                  alt="Target | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Target"
                  height="70px"
                  class="mx-5"
                />
                <h6>Target</h6>
              </div>
            </div>
            <div class="">
              <div class="boxed m-0 text-center">
                <nuxt-img
                  src="img/companies/etsy.png"
                  alt="Etsy | Platform Engineers"
                  format="png"
                  loading="lazy"
                  title="Etsy"
                  height="50px"
                  class="mx-5"
                />
                <h6>Etsy</h6>
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
              <h2>Services For eCommerce</h2>
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
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card"
                style="background-color: white"
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
                <a :href="`/services/${service.slug}`" class="t-hover">
                  <h4 class="flex-grow-1 mb-2">{{ service.title }}</h4>
                </a>
                <p class="flex-grow-1 m-0">
                  {{ service.description }}
                </p>
                <a
                  :href="`/services/${service.slug}`"
                  class="d-lg-none mt-4 mb-0 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
.hero-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
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

  /* background: url("/img/a9.jpg"); */
  background: url("/img/a112.jpg");
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
  opacity: 0.1;
  z-index: -1;
  background: url("/img/s2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}

/* .wave-bk-reverse {
  overflow: hidden;
  position: relative;
} */

/* .wave-bk-reverse::before {
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
} */

.bs-1 {
  /* box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.45),
    -25px 0 20px -20px rgba(0, 0, 0, 0.45); */
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

  /*  box-shadow: rgba(0, 0, 0, 0.3) -30px 0 30px 0; */

  /*  box-shadow: -25px 0 20px -20px rgba(0, 0, 0, 0.45); */
}

.t-hover:hover h4 {
  color: #179bfd;
}

.t-hover:hover {
  text-decoration-color: #179bfd;
}

.card-svg {
  overflow: hidden;
  position: relative;
  background: transparent !important;
}

.card-svg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  background: url("/img/card47.png") white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
</style>
