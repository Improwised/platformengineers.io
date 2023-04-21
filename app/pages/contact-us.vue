<template>
  <div class="main-container">
    <div class="contact-us-bk">
      <Navigation />
      <section class="text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6">
              <h1>Let's talk about your project</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="bg-- contact-us-form-bk">
      <div class="container">
        <div
          class="row justify-content-between bs-1 p-5 br-30 lead fc-lead bg-white"
        >
          <div
            class="col-lg-6 text-center d-flex align-items-center justify-content-center py-5"
          >
            <nuxt-img
              src="/img/contact-us.png"
              alt="Contact Us | Platform Engineers"
              format="png"
              loading="lazy"
            />
          </div>
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center"
          >
            <div>
              <p>
                We would love to hear from you! If you're interested in
                improving and scaling your project through our platform
                engineering services, please don't hesitate to get in touch.
              </p>
              <p>
                Our team of experts is dedicated to helping you achieve your
                goals. You can reach us at the following email address:
                <a href="mailto:sales@platformengineers.in"
                  >sales@platformengineers.in</a
                >.
              </p>
              <p>
                We'll do our best to get back to you as soon as possible and
                provide you with the information you need to make an informed
                decision.
              </p>
              <div class="text-center">
                <a
                  class="btn btn--primary type--uppercase b-30"
                  href="mailto:sales@platformengineers.in"
                >
                  <span class="btn__text"> LET'S TALK </span>
                </a>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 offset-md-3">
          </div> -->
        </div>
      </div>
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
  head() {
    const contactTitle = "Contact Us | Platform Engineers";
    const contactDescription =
      "For any further info please feel free to Contact us on contact@platformengineers.in";
    return {
      title: contactTitle,
      meta: [
        {
          name: "description",
          content: contactDescription,
        },
        {
          name: "title",
          content: contactTitle,
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
          content: contactTitle,
        },
        {
          property: "og:description",
          content: contactDescription,
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "/img/plateform-engineers.png",
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
          content: contactTitle,
        },
        {
          property: "twitter:description",
          content: contactDescription,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/plateform-engineers.png",
        },
      ],
      // script: [
      //   {
      //     src: "https://www.google.com/recaptcha/api.js?render=6Lfe5kwlAAAAAIMs9H9qX2E9X7qdK3PbdRwP6iFg",
      //   },
      // ],
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
.contact-us-bk {
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 200px 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.contact-us-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: -1;
  background: url("/img/ab2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .contact-us-bk {
    border-radius: 0 0 30px 30px;
  }
}

.contact-us-form-bk {
  overflow: hidden;
  position: relative;
}

.contact-us-form-bk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.09;
  z-index: -1;
  background: url("/img/a2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.bs-1 {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}

.br-30 {
  border-radius: 30px;
}
</style>
