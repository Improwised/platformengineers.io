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

      <section
        v-if="industry.common_usecases_title"
        class="wave-bk bg-- section-padding"
      >
        <div class="container">
          <div class="row">
            <SectionHeading :title="industry.common_usecases_title" />
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

      <section
        v-if="industry.benefits_title"
        class="wave-bk border-top bg-- section-padding"
      >
        <div class="container">
          <div class="row">
            <SectionHeading :title="industry.benefits_title" />
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
        v-if="industry && industry.h1_heading && industry.h1_heading.length"
        id=""
        class="text-center border-top section-padding"
      >
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2 pb-4">
              <h1 class="mb-10 h2">{{ industry.h1_heading }}</h1>
              <p class="para" v-html="industry.h1_description"></p>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="industry && industry.companies && industry.companies.length"
        id="toolBox"
        class="text-center technologies border-top section-padding"
      >
        <SectionHeading :title="industry.companies_title" />
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

      <section class="wave-bk border-top bg-- section-padding">
        <div class="container">
          <div class="row">
            <SectionHeading
              :title="industry.services_title"
              :description="industry.services_description"
            />
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

      <section class="text-center border-top bg-- section-padding">
        <div class="container">
          <div class="row">
            <div class="cta">
              <h2 v-if="$route.params.slug === 'IoT'">
                Let's collaborate to build a scalable, secure, and
                high-performance IoT platform tailored to your specific needs.
              </h2>
              <h2 v-else-if="$route.params.slug === 'ecommerce'">
                Reduce Costs, Increase Efficiency - Let's Build a Scalable,
                Secure eCommerce Platform for Your Business.
              </h2>

              <h2 v-else-if="$route.params.slug === 'fintech'">
                Let's build a platform that's as agile and secure as your
                financial future. Our expert team is dedicated to delivering
                scalable, high-performance solutions tailored to your specific
                needs.
              </h2>

              <h2 v-else-if="$route.params.slug === 'SaaS'">
                Scale your SaaS business with confidence using our platform
                engineering solutions.
              </h2>

              <h2 v-else-if="$route.params.slug === 'enterprise'">
                Don't let inefficiencies hold you back. Contact us today to
                explore how our services can transform your SaaS business. Let's
                work together to build a scalable, reliable, and secure platform
                that meets the evolving needs of your customers.
              </h2>

              <h2 v-else>
                Start Your Platform Engineering Journey Today. Let's Discuss
                Your Platform Engineering Needs.
              </h2>
              <Button text="Contact us" />
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
import SectionHeading from "@/components/common/SectionHeading.vue";

export default {
  components: {
    Navigation,
    Header,
    Button,
    Card,
    SectionHeading,
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
