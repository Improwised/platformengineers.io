<template>
  <div v-if="service" class="services">
    <div class="services-bk">
      <Navigation />
      <div class="container">
        <div class="row py-2">
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <div>
              <h2>{{ service.title }}</h2>
              <p class="lead">
                {{ service.description }}
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              v-if="service && service.page_image && service.page_image.id"
              :src="$urls.assets(service.page_image.id)"
              :alt="service.title"
              :title="service.title"
              format="png"
              loading="lazy"
              height="400px"
              class="img-dim"
            />
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="row">
          <div
            class="col-sm-10 col-sm-offset-1 col-md-8 offset-md-2 text-left lead text-dark ul-list"
            v-html="service.content"
          ></div>
        </div>
      </div>
    </section>

    <section v-if="service.features" class="border-top wave-bk bg--">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.features_title }}</h2>
          </div>
          <div
            v-for="(feature, index) in service.features"
            :key="index"
            :class="`mt-5 col-md-${
              $route.params.slug === 'kubernetes-consulting-services'
                ? '6'
                : '4'
            } d-flex`"
          >
            <div class="w-100 p-5 bs-1 card-svg b-30">
              <div class="svg mb-4" v-html="feature.image"></div>
              <h5 class="text-center mb-0">{{ feature.title }}</h5>
              <div
                :class="`ul-list list-style-content ${
                  $route.params.slug !== 'kubernetes-consulting-services'
                    ? 'text-center'
                    : ''
                }`"
                v-html="feature.description"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.process" class="border-top">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.process_title }}</h2>
          </div>
          <div
            v-for="(_process, index) in service.process"
            :key="index"
            class="col-md-8 offset-md-2 p-5"
            style="border-radius: 5px"
            :style="
              index % 2
                ? 'box-shadow: rgba(204, 219, 232, 0.5) 15px 0px 15px 0px;'
                : 'box-shadow: rgb(204, 219, 232, 0.5) 15px 0px 15px 0px inset;'
            "
          >
            <div class="d-flex align-items-center">
              <div
                class="pr-5 _process-step"
                style="width: 100px; min-width: 100px"
                v-html="_process.image"
              ></div>
              <div class="flex-grow-1">
                <h5 class="m-0 p-0">{{ _process.title }}</h5>
                <p>{{ _process.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.approach_cards" class="wave-bk border-top bg--">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.approach_title }}</h2>
          </div>
          <div
            v-for="(approach, index) in service.approach_cards"
            :key="index"
            class="mt-5 text-center col-md-4 d-flex"
          >
            <div class="w-100 p-5 bs-1 card-svg b-30">
              <div class="svg mb-4" v-html="approach.image"></div>
              <h5 class="mb-0">{{ approach.title }}</h5>
              <div v-html="approach.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.offering_cards" class="wave-bk border-top bg--">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.offering_title }}</h2>
          </div>
          <div
            v-for="(offering, index) in service.offering_cards"
            :key="index"
            class="mt-5 text-center col-md-4 d-flex"
          >
            <div class="w-100 p-5 bs-1 card-svg b-30">
              <div class="svg mb-4" v-html="offering.image"></div>
              <h5 class="mb-0">{{ offering.title }}</h5>
              <div v-html="offering.content"></div>
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
                <span class="btn__text"> Get in Touch </span>
              </a>
            </div>
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
    const title = (params && params.slug) || "";
    const service = await app.$axios.$get(app.$urls.service(title));

    return { service: service.data[0] };
  },
  head() {
    const image = this.$img(this.$urls.assets(this.service.page_image.id), {
      format: "png",
      height: "400px",
    });

    return {
      title: (this.service && this.service.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.service && this.service.seo_description) || "",
        },
        {
          name: "title",
          content: (this.service && this.service.seo_title) || "",
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
          content: (this.service && this.service.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.service && this.service.seo_description) || "",
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
          content: (this.service && this.service.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.service && this.service.seo_description) || "",
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
.services-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.services-bk::before {
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
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .services-bk {
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

.bs-1 {
  /*  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0; */

  /* box-shadow: -25px 0 20px -20px rgba(0, 0, 0, 0.45),
    0 25px 20px -20px rgba(0, 0, 0, 0.45); */
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.45),
    -25px 0 20px -20px rgba(0, 0, 0, 0.45);
}

.svg svg {
  width: 100%;
  height: 80px;
}

.process-3 {
  z-index: 0;
}

.process-3 li.process_item {
  margin-bottom: 2rem;
}

.process-3 li .process__body {
  width: 85%;
}

.process-3::before {
  left: 1.36em;
}

.process-3 li .process__number {
  width: 2.71428571em;
  height: 2.71428571em;
}

.p-45 {
  display: block;
  height: 10px;
  width: 10px;
  background-color: #4a90e2;
  top: 0;
  border-radius: 20px;
}

.list-style-content ul {
  list-style: inherit;
  padding: revert;
}

._process-step svg {
  width: 100%;
  height: 80px;
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
