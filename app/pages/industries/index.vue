<template>
  <div v-if="industries">
    <div class="main-container">
      <div class="industry-bk">
        <Navigation />
        <div>
          <Header
            :title="industries.title"
            :image="$urls.assets(industries.image)"
            :contactus="true"
            :description="industries.description"
          />
        </div>
      </div>

      <List
        :list="industriesNames"
        readmore="/industries/"
        :industries="true"
      />
      <!-- <section v-if="industriesNames && industriesNames.length" class="bg--">
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
                  class="industry d-flex align-items-center justify-content-center p-4"
                  style="height: 300px"
                >
                  <nuxt-img
                    v-if="industry.image"
                    :src="$urls.assets(industry.image)"
                    :alt="industry.title"
                    :title="industry.title"
                    loading="lazy"
                    format="png"
                  />
                </a>
                <div class="feature__body px-4 pb-4 text-center">
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
      </section> -->

      <hr class="m-0" />

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
import Header from "@/components/common/Header.vue";
import List from "@/components/common/List.vue";

export default {
  components: {
    Navigation,
    Header,
    List,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const { data: industriesNames } = await app.$axios.$get(
      app.$urls.industriesNames
    );
    const { data: industries } = await app.$axios.$get(app.$urls.industries);

    return {
      industriesNames,
      industries,
    };
  },

  head() {
    const image = this.$img(this.$urls.assets(this.industries.image), {
      format: "png",
      height: "400px",
    });

    return {
      title: (this.industries && this.industries.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.industries && this.industries.seo_description) || "",
        },
        {
          name: "title",
          content: (this.industries && this.industries.seo_title) || "",
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
          content: (this.industries && this.industries.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.industries && this.industries.seo_description) || "",
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
          content: (this.industries && this.industries.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.industries && this.industries.seo_description) || "",
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

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}
</style>
