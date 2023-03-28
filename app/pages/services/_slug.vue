<template>
  <div v-if="service" class="services">
    <!-- <link rel="stylesheet" type="text/css" href="/css/markdown.css" /> -->

    <div class="services-bk">
      <Navigation />
      <div class="container">
        <div class="row py-2">
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <h1>{{ service.title }}</h1>
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
            />
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="row">
          <div
            class="col-sm-10 col-sm-offset-1 col-md-8 offset-md-2 text-left lead"
            v-html="service.content"
          ></div>
          <!--           <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="list-style-content" v-html="service.content"></div>
          </div> -->
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
            :class="`col-md-${
              $route.params.slug === 'kubernetes-consulting-services'
                ? '6'
                : '4'
            } d-flex`"
          >
            <div class="w-100 feature feature-3 boxed boxed--lg bs-1 rounded">
              <div class="svg mb-4" v-html="feature.image"></div>
              <h4 class="flex-grow-1 text-center">{{ feature.title }}</h4>
              <div
                :class="`list-style-content ${
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
                ? 'box-shadow: rgba(136, 165, 191, 0.38) 12px 2px 16px 0px, rgba(255, 255, 255, 1) -12px -2px 16px 0px;'
                : 'box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;'
            "
          >
            <div class="d-flex align-items-center">
              <div
                class="pr-5 _process-step"
                style="width: 100px; min-width: 100px"
                v-html="_process.image"
              >
                <!-- <svg
                  class="wh-40"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 480 480"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M338.512 127.633A8 8 0 0 0 344 120.03v-32.07a7.991 7.991 0 0 0-5.488-7.594l-17.07-5.648a83.01 83.01 0 0 0-3.196-7.664l7.195-15.153a8.018 8.018 0 0 0-.707-8.07 104.037 104.037 0 0 0-24.566-24.566 8.001 8.001 0 0 0-8.07-.707l-15.153 7.195a85.729 85.729 0 0 0-7.664-3.188l-5.656-17.078A7.984 7.984 0 0 0 256.031 0h-32.07a7.991 7.991 0 0 0-7.594 5.488l-5.765 17.407-7.243 3-15.464-7.344a8.038 8.038 0 0 0-8.07.707 104.451 104.451 0 0 0-24.579 24.566 7.998 7.998 0 0 0-.703 8.07l7.344 15.465-3 7.243-17.407 5.765A8.004 8.004 0 0 0 136 87.97v32.07a7.991 7.991 0 0 0 5.488 7.594l17.407 5.765 3 7.243-7.344 15.464a8.009 8.009 0 0 0 .707 8.07 104.451 104.451 0 0 0 24.566 24.579 8.016 8.016 0 0 0 8.07.703l15.153-7.191a86.862 86.862 0 0 0 7.664 3.183l5.656 17.078A8.007 8.007 0 0 0 223.97 208h32.07a7.991 7.991 0 0 0 7.594-5.488l5.656-17.07a83.01 83.01 0 0 0 7.664-3.196l15.152 7.195a7.973 7.973 0 0 0 8.07-.707 104.037 104.037 0 0 0 24.567-24.566 7.99 7.99 0 0 0 .707-8.07l-7.191-15.153a86.862 86.862 0 0 0 3.183-7.664zm-25.91-8.281a7.997 7.997 0 0 0-5.137 5.265 70.806 70.806 0 0 1-5.176 12.48 8.01 8.01 0 0 0-.168 7.192l6.8 14.313a88.206 88.206 0 0 1-14.32 14.32l-14.312-6.8a7.978 7.978 0 0 0-7.2.167 70.034 70.034 0 0 1-12.472 5.176 7.997 7.997 0 0 0-5.265 5.137L250.258 192h-20.516l-5.094-15.398a7.997 7.997 0 0 0-5.265-5.137 70.806 70.806 0 0 1-12.48-5.176 8.01 8.01 0 0 0-7.192-.168l-14.313 6.8a88.302 88.302 0 0 1-14.328-14.327l6.801-14.313a7.994 7.994 0 0 0 .168-6.496l-5.766-13.906a7.998 7.998 0 0 0-4.875-4.527L152 114.258V93.742l15.398-5.094a7.998 7.998 0 0 0 4.875-4.527l5.766-13.906a7.994 7.994 0 0 0-.168-6.496l-6.8-14.313a88.302 88.302 0 0 1 14.327-14.328l14.313 6.8a8.025 8.025 0 0 0 6.496.169l13.906-5.766a8.01 8.01 0 0 0 4.528-4.875L229.742 16h20.516l5.094 15.398a7.997 7.997 0 0 0 5.265 5.137 70.806 70.806 0 0 1 12.48 5.176 8.035 8.035 0 0 0 7.192.168l14.313-6.8a88.206 88.206 0 0 1 14.32 14.32l-6.8 14.312a8.003 8.003 0 0 0 .167 7.2 70.034 70.034 0 0 1 5.176 12.472 7.997 7.997 0 0 0 5.137 5.265L328 93.742v20.516zM72 480c39.695 0 72-32.305 72-72 0-36.992-28.055-67.527-64-71.527V320h152v16.473c-35.945 4-64 34.535-64 71.527 0 39.695 32.305 72 72 72s72-32.305 72-72c0-36.992-28.055-67.527-64-71.527V320h152v16.473c-35.945 4-64 34.535-64 71.527 0 39.695 32.305 72 72 72s72-32.305 72-72c0-36.992-28.055-67.527-64-71.527V312c0-4.414-3.586-8-8-8H248v-48l9.602 12.8 12.796-9.6-24-32c-3.015-4.032-9.78-4.032-12.796 0l-24 32 12.796 9.6L232 256v48H72c-4.414 0-8 3.586-8 8v24.473c-35.945 4-64 34.535-64 71.527 0 39.695 32.305 72 72 72zm344-112v-15.36c24.473 3.528 43.84 22.887 47.36 47.36H448v16h15.36c-3.528 24.473-22.887 43.84-47.36 47.36V448h-16v15.36c-24.473-3.528-43.84-22.887-47.36-47.36H368v-16h-15.36c3.528-24.473 22.887-43.84 47.36-47.36V368zm-152 90.52c-7.29 3.48-15.398 5.48-24 5.48s-16.71-2-24-5.48v-34.442c0-2.148.84-4.2 2.45-5.773 1.421-1.465 3.48-2.305 5.628-2.305a7.98 7.98 0 0 0 7.168-4.45 7.977 7.977 0 0 0-.805-8.398C228.824 401.023 228 398.617 228 396c0-3.71 1.672-7.16 4.602-9.457 2.984-2.336 6.75-3.078 10.62-2.137 3.801.93 7.106 4.106 8.22 7.922 1.445 4.93-.25 8.633-1.93 10.863a7.98 7.98 0 0 0-.75 8.375 7.994 7.994 0 0 0 7.16 4.434c4.453 0 8.078 3.625 8.078 8.078zM240 352c30.879 0 56 25.121 56 56 0 15.215-6.121 29.016-16 39.121v-23.043c0-9.23-5.223-17.27-12.871-21.308 1.215-4.832 1.137-9.961-.336-14.946-2.715-9.25-10.48-16.687-19.762-18.953-8.617-2.129-17.465-.27-24.304 5.074C215.91 379.297 212 387.335 212 396c0 2.313.281 4.574.832 6.77a22.465 22.465 0 0 0-5.695 4.222c-4.535 4.414-7.137 10.649-7.137 17.086v23.043c-9.879-10.105-16-23.906-16-39.121 0-30.879 25.121-56 56-56zm-168 0c30.879 0 56 25.121 56 56s-25.121 56-56 56-56-25.121-56-56 25.121-56 56-56zm0 0"
                      fill="#179bfd"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="M392 416h16a8.013 8.013 0 0 0 6.656-3.559l16-24-13.312-8.875L403.719 400H392zM64.8 416h14.4c4.847 0 8.8 3.594 8.8 8s-3.953 8-8.8 8H48v16h31.2c13.671 0 24.8-10.77 24.8-24s-11.129-24-24.8-24H64.8c-4.847 0-8.8-3.594-8.8-8s3.953-8 8.8-8H96v-16H64.8C51.13 368 40 378.77 40 392s11.129 24 24.8 24zM240 52c-28.672 0-52 23.328-52 52s23.328 52 52 52 52-23.328 52-52-23.328-52-52-52zm0 88c-19.848 0-36-16.152-36-36s16.152-36 36-36 36 16.152 36 36-16.152 36-36 36zM130.223 213.535l11.547-11.078C117.414 177.078 104 143.703 104 108.48c0-35.222 13.414-68.601 37.777-93.984a8.006 8.006 0 0 0 1.301-9.273 8.027 8.027 0 0 0-8.39-4.16l-48 8 2.632 15.785 26.832-4.473C97.872 45.938 88 76.527 88 108.48c0 39.375 15 76.688 42.223 105.055zM344 216c.8 0 1.602-.121 2.39-.367l48-15.04-4.78-15.265-22.954 7.184C383.136 167.809 392 138.754 392 108.48c0-39.375-15-76.687-42.223-105.054L338.23 14.504C362.586 39.879 376 73.258 376 108.48c0 35.223-13.414 68.598-37.777 93.985A8 8 0 0 0 344 216zm0 0"
                      fill="#179bfd"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </svg> -->
              </div>
              <div class="flex-grow-1">
                <h4 class="m-0 p-0">{{ _process.title }}</h4>
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
            class="text-center col-md-4 d-flex"
          >
            <div class="w-100 feature feature-3 boxed boxed--lg bs-1 rounded">
              <div class="svg mb-4" v-html="approach.image"></div>
              <h4 class="flex-grow-1">{{ approach.title }}</h4>
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
            class="text-center col-md-4 d-flex"
          >
            <div class="w-100 feature feature-3 boxed boxed--lg bs-1 rounded">
              <div class="svg mb-4" v-html="offering.image"></div>
              <h4 class="flex-grow-1">{{ offering.title }}</h4>
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
                class="btn btn--primary type--uppercase"
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
// import Breadcrumb from "@/components/breadcrumb.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    // Breadcrumb,
    Navigation,
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const title = (params && params.slug) || "";
    const service = await app.$axios.$get(app.$urls.service(title));

    return { service: service.data[0] };
  },
  head() {
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
          content: (this.service && this.service.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.service && this.service.seo_description) || "",
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
  opacity: 0.1;
  z-index: -1;
  background: url("/img/s2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
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
</style>
