<template>
  <div v-if="industry">
    <div class="main-container">
      <div class="industry-bk">
        <Navigation />
        <section class="space--xs">
          <Header
            :title="industry.title"
            :image="$urls.assets(industry.image.id)"
            :description="industry.description"
            :contactus="true"
          />
        </section>
      </div>

      <section v-if="industry.common_usecases_title" class="wave-bk bg--">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2 class="p-0 m-0">{{ industry.common_usecases_title }}</h2>
            </div>
            <div
              v-for="(usecase, index) in industry.common_usecases"
              :key="index"
              class="mt-5 text-center col-md-4 d-flex"
            >
              <Card :title="usecase.title" :description="usecase.description" />
            </div>
          </div>
        </div>
      </section>

      <section v-if="industry.benefits_title" class="wave-bk border-top bg--">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2 class="p-0 m-0">{{ industry.benefits_title }}</h2>
            </div>
            <div
              v-for="(benefits, index) in industry.benefits"
              :key="index"
              class="mt-5 text-center col-md-4 d-flex"
            >
              <Card
                :title="benefits.title"
                :description="benefits.description"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="industry && industry.companies && industry.companies.length"
        id="toolBox"
        class="text-center technologies border-top"
      >
        <h2>{{ industry.companies_title }}</h2>
        <div class="container-fluid o_05">
          <div class="row text-center justify-content-center">
            <div
              v-for="(company, index) in industry.companies"
              :key="index"
              class=""
            >
              <div class="boxed m-0 text-center">
                <div class="svg mb-4" v-html="company.company_logo"></div>
                <h3 class="h6">{{ company.company_name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wave-bk border-top bg--">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-5">
              <h2>{{ industry.services_title }}</h2>
              <p class="lead">
                {{ industry.services_description }}
              </p>
            </div>
            <div
              v-for="(service, index) in industry.services"
              :key="index"
              class="col-md-6 col-lg-4 d-flex mt-5"
            >
              <Card
                :icon-image="service.pe_services_id.icon_as_image"
                :title="service.pe_services_id.title"
                link-redirect="services"
                :slug="service.pe_services_id.slug"
                :description="service.pe_services_id.description"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="text-center border-top bg--">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="cta">
                <h2>Let's Dive Deeper into Your Needs – Ready to Talk?</h2>
                <Button text="Contact us" />
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
import Header from "@/components/common/Header.vue";
import Button from "@/components/common/Button.vue";
import Card from "@/components/common/Card.vue";

export default {
  components: {
    Navigation,
    Header,
    Button,
    Card,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const title = (params && params.slug) || "";
    const industry = await app.$axios.$get(app.$urls.industry(title));
    return {
      industry: industry.data[0],
    };
  },

  head() {
    const image =
      this.industry?.image?.id &&
      this.$img(this.$urls.assets(this.industry.image.id), {
        format: "png",
        height: "400px",
      });

    return {
      title: (this.industry && this.industry.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.industry && this.industry.seo_description) || "",
        },
        {
          name: "title",
          content: (this.industry && this.industry.seo_title) || "",
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
          content: (this.industry && this.industry.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.industry && this.industry.seo_description) || "",
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
          content: (this.industry && this.industry.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.industry && this.industry.seo_description) || "",
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
.industry-bk::before {
  opacity: 0.1;
  background: url("/img/blog-bk-1.png");
}

.svg svg {
  width: 70%;
  height: 50px;
}
</style>
