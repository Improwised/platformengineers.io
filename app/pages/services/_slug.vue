<template>
  <div v-if="service" class="services">
    <div class="services-bk">
      <Navigation />
      <Header
        :title="service.title"
        :image="$urls.assets(service.page_image.id)"
        :description="service.description"
      />
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
          <SectionHeading :title="service.features_title" />
          <div
            v-for="(feature, index) in service.features"
            :key="index"
            :class="`mt-5 col-md-${
              $route.params.slug === 'kubernetes-consulting-services'
                ? '6'
                : '4'
            } d-flex`"
          >
            <Card
              :icon-image="feature.image"
              :title="feature.title"
              image-type="svg-text"
              :description="feature.description"
            />
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.process" class="border-top">
      <div class="container">
        <div class="row">
          <SectionHeading :title="service.process_title" />
          <!-- <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.process_title }}</h2>
          </div> -->
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
          <SectionHeading :title="service.approach_title" />
          <!-- <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.approach_title }}</h2>
          </div> -->
          <div
            v-for="(approach, index) in service.approach_cards"
            :key="index"
            class="mt-5 text-center col-md-4 d-flex"
          >
            <Card
              :icon-image="approach.image"
              :title="approach.title"
              image-type="svg-text"
              :description="approach.content"
            />
          </div>
        </div>
      </div>
    </section>

    <section v-if="service.offering_cards" class="wave-bk border-top bg--">
      <div class="container">
        <div class="row">
          <SectionHeading :title="service.offering_title" />
          <!-- <div class="text-center col-md-8 offset-md-2 pb-5">
            <h2 class="p-0 m-0">{{ service.offering_title }}</h2>
          </div> -->
          <div
            v-for="(offering, index) in service.offering_cards"
            :key="index"
            class="mt-5 text-center col-md-4 d-flex"
          >
            <Card
              :icon-image="offering.image"
              :title="offering.title"
              image-type="svg-text"
              :description="offering.content"
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
              <h2>Want to know more about us?</h2>
              <Button text="Get in Touch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeading from "../../components/common/SectionHeading.vue";
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
    SectionHeading,
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
</style>
