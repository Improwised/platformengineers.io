<template>
  <div class="main-container about-us">
    <div class="about-bk">
      <Navigation />
      <div>
        <div class="container">
          <!--           <div class="row align-items-center justify-content-center d-flex">
            <div class="">
              <h1>{{ aboutUs.title }}</h1>
              <p class="m-0" style="font-size: 18px; color: #724fe9">
                Powering innovation with expertise
              </p>
              <p style="font-size: 16px; max-width: 300px">
                Our platform engineers are driven to solve your challenges and
                build tomorrow's solutions.
              </p>
            </div>
            <div class="text-right">
              <img alt="Image" src="/img/about-us-2.svg" height="400px" />
            </div>
          </div> -->

          <div class="row py-2">
            <div
              class="col-md-6 d-flex align-items-center justify-content-center"
            >
              <div class="">
                <h1>{{ aboutUs.title }}</h1>
                <p class="m-0" style="font-size: 18px; color: #724fe9">
                  Powering innovation with expertise
                </p>
                <p style="font-size: 16px; max-width: 300px">
                  Our platform engineers are driven to solve your challenges and
                  build tomorrow's solutions.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-center justify-content-center"
            >
              <img alt="Image" src="/img/about-us-2.svg" height="400px" />
              <!--               <nuxt-img
                v-if="service && service.page_image && service.page_image.id"
                :src="$urls.assets(service.page_image.id)"
                :alt="service.title"
                :title="service.title"
                format="png"
                loading="lazy"
                height="400px"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <Navigation />
      <section class="text-center">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 col-md-8">
              <h1 class="">{{ aboutUs.title }}</h1>
              c
            </div>
          </div>
        </div>
      </section>
    </div> -->

    <section v-if="aboutUs" class="text-center bg--secondary">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-left lead"
            v-html="aboutUs.content"
          ></div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section class="text-center">
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
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const aboutUs = await app.$axios.$get(app.$urls.aboutUs);
    return {
      aboutUs: aboutUs.data,
    };
  },
  head() {
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
          content: this.aboutUs.seo_title,
        },
        {
          property: "twitter:description",
          content: this.aboutUs.seo_description,
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

<style>
.about-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;

  /* box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset; */
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
</style>
