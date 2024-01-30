<template>
  <div v-if="page">
    <div class="main-container">
      <div class="hero-bk">
        <Navigation />
        <section>
          <Header
            :title="page.title"
            :image="$urls.assets(page.hero_image.id)"
            :description="page.description"
            :contactus="true"
          />
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
              <strong class="as-color-o as-f-xxxl">{{
                page.section1_sub_title
              }}</strong>
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
              <strong class="as-color-o as-f-xxxl">{{
                page.section2_sub_title
              }}</strong>

              <h3>{{ page.section1_sub_heading1 }}</h3>
              <div v-html="page.section1_sub_description1"></div>
            </div>
          </div>
          <div
            class="row d-flex align-items-center justify-content-center py-3 py-sm-5"
          >
            <div class="col-lg-6">
              <strong class="as-color-o as-f-xxxl">{{
                page.section3_sub_title
              }}</strong>

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
            <SectionHeading
              :title="page.section_2_title"
              :description="page.section_2_description"
            />
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

      <div class="container">
        <div class="row">
          <SectionHeading
            :title="page.section_industry_title"
            :description="page.section_industry_description"
          />
        </div>
      </div>
      <List :list="industriesInfo" readmore="/industries/" :is-show="true" />

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
import Header from "@/components/common/Header.vue";
import List from "@/components/common/List.vue";
import SectionHeading from "@/components/common/SectionHeading.vue";

export default {
  components: {
    Navigation,
    Technologies,
    Header,
    List,
    SectionHeading,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const title = params.slug;
    const page = await app.$axios.$get(app.$urls.landing_page_for_seo(title));

    const { data: industriesInfo } = await app.$axios.$get(
      app.$urls.industriesNames
    );
    const { data: industries } = await app.$axios.$get(app.$urls.industries);
    return {
      page: page.data[0],
      industriesInfo,
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
.wave-bk::before {
  opacity: 0.1;
  background: url("/img/wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.wave-bk-reverse::before {
  opacity: 0.3;
  background: url("/img/wave-reverse.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

.masonry__item {
  display: flex;
}
</style>
