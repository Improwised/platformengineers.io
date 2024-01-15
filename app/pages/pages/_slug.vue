<template>
  <div v-if="page">
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
                  <h1>{{ page.title }}</h1>
                  <div class="lead" v-html="page.description"></div>
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
                  v-if="page && page.hero_image && page.hero_image.id"
                  :src="$urls.assets(page.hero_image.id)"
                  :alt="`${page.hero_image.title} | Platform Engineers`"
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

      <Technologies />

      <div class="pt-5">
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
      <section class="py-3">
        <div class="container">
          <div
            class="row d-flex align-items-center justify-content-center py-3 py-sm-5"
          >
            <div class="col-lg-6">
              <strong class="as-color-o as-f-xxxl"
                >Cloud Migration Management</strong
              >
              <h3>{{ page.section_1_title }}</h3>
              <div v-html="page.section_1_description"></div>
            </div>
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center"
            >
              <div class="thumb wow fadeInRight" data-wow-delay="0.6s">
                <nuxt-img
                  v-if="page.section1_image"
                  :src="$urls.assets(page.section1_image.id)"
                  :alt="page.section_1_title"
                  :title="page.section_1_title"
                  loading="lazy"
                  format="png"
                />
              </div>
            </div>
          </div>
          <div
            class="row d-flex align-items-center justify-content-center py-3 py-sm-5"
          >
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center"
            >
              <nuxt-img
                v-if="page.section1_sub_image1"
                :src="$urls.assets(page.section1_sub_image1.id)"
                :alt="page.section1_sub_heading1"
                :title="page.section1_sub_heading1"
                loading="lazy"
                format="png"
              />
            </div>
            <div class="col-lg-6">
              <strong class="as-color-o as-f-xxxl"
                >Cloud Engineering Services</strong
              >

              <h3>{{ page.section1_sub_heading1 }}</h3>
              <div v-html="page.section1_sub_description1"></div>
            </div>
          </div>
          <div
            class="row d-flex align-items-center justify-content-center py-3 py-sm-5"
          >
            <div class="col-lg-6">
              <strong class="as-color-o as-f-xxxl"
                >Cloud Migration Solutions</strong
              >

              <h3>{{ page.section1_sub_heading2 }}</h3>
              <div v-html="page.section1_sub_description2"></div>
            </div>
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center"
            >
              <nuxt-img
                v-if="page.section1_sub_image2"
                :src="$urls.assets(page.section1_sub_image2.id)"
                :alt="page.section1_sub_heading2"
                :title="page.section1_sub_heading2"
                loading="lazy"
                format="png"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="wave-bk-reverse bg--">
        <div class="container">
          <div class="row">
            <div class="text-center col-md-8 offset-md-2">
              <h2 class="m-0">{{ page.section_2_title }}</h2>
              <div class="lead" v-html="page.section_2_description"></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div
              v-for="(section, index) in page.section_2"
              :key="index"
              class="col-md-6 col-lg-4 d-flex mt-5"
            >
              <div
                class="w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"
              >
                <h5 class="mb-0 zi-0 text-center">{{ section.title }}</h5>
                <div
                  class="zi-0 text-center"
                  v-html="section.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="industriesNames && industriesNames.length" class="bg--">
        <div class="container">
          <div class="row pb-5">
            <div class="col-md-8 offset-md-2">
              <h2 class="m-0 text-center">{{ page.section_industry_title }}</h2>
              <div v-html="page.section_industry_description"></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div
              v-for="(industry, index) in industriesNames"
              :key="index"
              class="masonry__item col-lg-4 col-md-6"
            >
              <article class="b-30 bs-11">
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
      </section>

      <div class="px-3 px-sm-0 py-5 as-call-to-action-block as-home">
        <div
          class="container d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap"
        >
          <div>
            <h3 class="mb-3 p-0 text-white">{{ page.call_to_action_title }}</h3>
            <div
              class="text-white"
              v-html="page.call_to_action_description"
            ></div>
          </div>
          <div class="pt-3 pb-0 p-md-5">
            <a
              class="btn btn--primary type--uppercase b-30"
              :href="page.call_to_action_button_link"
            >
              <span class="btn__text">
                {{ page.call_to_action_button_text }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Technologies from "@/components/Technologies.vue";

export default {
  components: {
    Navigation,
    Technologies,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const title = params.slug;
    const page = await app.$axios.$get(app.$urls.landing_page_for_seo(title));

    const { data: industriesNames } = await app.$axios.$get(
      app.$urls.industriesNames
    );
    const { data: industries } = await app.$axios.$get(app.$urls.industries);
    return {
      page: page.data[0],
      industriesNames,
      industries,
    };
  },
  head() {
    const image =
      this.page?.hero_image?.id &&
      this.$img(this.$urls.assets(this.page.hero_image.id), {
        format: "png",
        height: "400px",
      });

    return {
      title: this.page && this.page.seo_title,
      meta: [
        {
          name: "description",
          content: this.page && this.page.seo_description,
        },
        {
          name: "title",
          content: this.page && this.page.seo_title,
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
          content: this.page && this.page.seo_title,
        },
        {
          property: "og:description",
          content: this.page && this.page.seo_description,
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
          content: this.page && this.page.seo_title,
        },
        {
          property: "twitter:description",
          content: this.page && this.page.seo_description,
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
  opacity: 0.1;
  z-index: -1;
  background: url("/img/wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
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
  opacity: 0.1;
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

.as-home {
  background-color: #151515;
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

<style>
.masonry__item {
  display: flex;
}

.t-hover:hover {
  text-decoration-color: #179bfd;
}

.t-hover:hover h5 {
  color: #179bfd;
}

.bs-11 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}
</style>
