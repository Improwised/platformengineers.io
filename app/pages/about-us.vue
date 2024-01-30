<template>
  <div class="main-container about-us">
    <div class="about-bk">
      <Navigation />

      <div>
        <div class="container">
          <div class="row py-2">
            <div
              class="col-md-6 d-flex align-items-center justify-content-center"
            >
              <div>
                <h1>{{ aboutUs.title }}</h1>
                <p class="m-0 color-theme lead">
                  Powering innovation with expertise
                </p>
                <p class="lead" style="max-width: 300px">
                  Our platform engineers are driven to solve your challenges and
                  build tomorrow's solutions.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-center justify-content-center"
            >
              <nuxt-img
                src="/img/about-us-2.svg"
                alt="About us | Platform Engineers"
                format="png"
                loading="lazy"
                height="400px"
                class="img-dim"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section v-if="aboutUs" class="text-center bg--secondary section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-left lead text-dark ul-list"
            v-html="aboutUs.content"
          ></div>
        </div>
      </div>
    </section>

    <section class="text-center section-padding">
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
import Navigation from "@/components/Navigation.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Navigation,
    Button,
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const aboutUs = await app.$axios.$get(app.$urls.aboutUs);
    return {
      aboutUs: aboutUs.data,
    };
  },
  head() {
    const image = this.$img("/img/about-us-2.svg", {
      format: "png",
      height: "400px",
    });

    return {
      title: this.aboutUs.seo_title,
      meta: [
        {
          name: "title",
          content: this.aboutUs.seo_title,
        },
        {
          name: "description",
          content: this.aboutUs.seo_description,
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
          content: this.aboutUs.seo_title,
        },
        {
          property: "og:description",
          content: this.aboutUs.seo_description,
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
          content: this.aboutUs.seo_title,
        },
        {
          property: "twitter:description",
          content: this.aboutUs.seo_description,
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
.about-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.about-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -1;
  background: url("/img/bk/bg-3.jpg");
  background: url("/img/a2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .about-bk {
    border-radius: 0 0 30px 30px;
  }
}

div p a {
  color: #0a5cbb;
}

div p strong a {
  color: #0a5cbb;
}
</style>
