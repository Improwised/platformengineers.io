<template>
  <div v-if="service" class="services">
    <link rel="stylesheet" type="text/css" href="/css/markdown.css" />
    <style type="text/css">
      .services .markdown-body ul {
        list-style: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        padding-inline-start: 40px;
      }
    </style>
    <section class="text-center bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>{{ service.title }}</h1>
            <Breadcrumb class="m-0" />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div style="font-size: 1.2rem" v-html="service.content"></div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section v-if="service.features" class="text-center bg--secondary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <h2>Features</h2>
            <p class="lead">
              Whether you’re building a welcome mat for your SaaS or a clean,
              corporate portfolio, Stack has your design needs covered.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.features" class="bg--secondary">
      <div class="container">
        <div class="row">
          <div
            v-for="(feature, index) in service.features"
            :key="index"
            class="col-md-6 d-flex"
          >
            <div class="feature feature-2 boxed boxed--border">
              <i :class="`icon ${feature.icon} color--primary`"></i>
              <div class="feature__body">
                <h5>{{ feature.title }}</h5>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.process" class="text-center bg--dark">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <h2>Process</h2>
            <p class="lead">
              Whether you’re building a welcome mat for your SaaS or a clean,
              corporate portfolio, Stack has your design needs covered.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.process" class="text-center bg--dark">
      <div class="container">
        <div class="row">
          <div
            v-for="(_process, index) in service.process"
            :key="index"
            class="col-md-6 d-flex"
          >
            <div class="w-100 feature feature-3 boxed boxed--lg boxed--border">
              <span class="h1 h1--large">{{ index + 1 }}.</span>
              <h3>{{ _process.title }}</h3>
              <p>{{ _process.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      :class="`text-center ${
        service.process ? '' : service.features ? '' : 'bg--secondary'
      }`"
    >
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
import Breadcrumb from "@/components/breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
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
