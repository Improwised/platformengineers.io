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
              <div class="w-100 p-5 bs-1 card-svg b-30">
                <h3 class="m-0 h5">{{ usecase.title }}</h3>
                <div>{{ usecase.description }}</div>
              </div>
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
              <div class="w-100 p-5 bs-1 card-svg b-30">
                <h3 class="m-0 h5">{{ benefits.title }}</h3>
                <div>{{ benefits.description }}</div>
              </div>
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
              <div
                class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg"
              >
                <div class="mb-4">
                  <nuxt-img
                    :src="$urls.assets(service.pe_services_id.icon_as_image)"
                    :alt="service.pe_services_id.title"
                    :title="service.pe_services_id.title"
                    format="png"
                    loading="lazy"
                    height="80"
                    width="80"
                  />
                </div>
                <a
                  :href="`/services/${service.pe_services_id.slug}`"
                  class="t-hover"
                >
                  <h3 class="m-0 h5">
                    {{ service.pe_services_id.title }}
                  </h3>
                </a>
                <p class="m-0">
                  {{ service.pe_services_id.description }}
                </p>
                <a
                  :href="`/services/${service.pe_services_id.slug}`"
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
                <h2>Let's Dive Deeper into Your Needs – Ready to Talk?</h2>
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
import Header from "@/components/Header.vue";

export default {
  components: {
    Navigation,
    Header,
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
  opacity: 0.5;
  z-index: -1;
  background: url("/img/a112.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .industry-bk {
    border-radius: 0 0 30px 30px;
  }
}

.bs-1 {
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.45),
    -25px 0 20px -20px rgba(0, 0, 0, 0.45);
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

.svg svg {
  width: 70%;
  height: 50px;
}
</style>
