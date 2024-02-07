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
      <section class="section-padding">
        <List :list="industriesInfo" readmore="/industries/" :is-show="true" />
      </section>

      <hr class="m-0" />

      <section class="text-center border-top bg-- section-padding">
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
import List from "@/components/common/List.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Navigation,
    Header,
    List,
    Button,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    const { data: industriesInfo } = await app.$axios.$get(
      app.$urls.industriesNames
    );
    const { data: industries } = await app.$axios.$get(app.$urls.industries);

    return {
      industriesInfo,
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
          content: process.env.BASE_URL + this.$route.path,
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
          href: process.env.BASE_URL + this.$route.path,
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

.masonry__item {
  display: flex;
}
</style>
