<template>
  <div class="main-container">
    <div class="contact-us-bk">
      <Navigation />
      <section class="text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6">
              <h1>Let's talk about your project</h1>
              <p class="lead">
                We would love to hear from you! If you're interested in
                improving and scaling your project through our platform
                engineering services, please don't hesitate to get in touch.
              </p>
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
            <div class="col-sm-11">
              <div id="errorMessages"></div>
              <div id="success">
                <div class="success-msg">
                  <b
                    >Message has been sent successfully. We will contact within
                    1 business day.</b
                  >
                </div>
              </div>
              <form
                id="contactus-submit"
                action="https://8uq6j8ikpd.execute-api.ap-south-1.amazonaws.com/contactus/api/contactus"
              >
                <input
                  id="sitekey"
                  type="hidden"
                  name="sitekey"
                  value="6Lfe5kwlAAAAAIMs9H9qX2E9X7qdK3PbdRwP6iFg"
                />
                <div class="col-xs-12">
                  <label for="name">Your Name:</label>
                  <input
                    id="name"
                    type="text"
                    class="validate-required"
                    name="name"
                    required="required"
                  />
                </div>
                <div class="col-xs-12">
                  <label for="email">Email Address:</label>
                  <input
                    id="email"
                    type="email"
                    class="validate-required validate-email"
                    name="email"
                    required="required"
                  />
                </div>
                <div class="col-xs-12">
                  <label for="message">Message:</label>
                  <textarea
                    id="message"
                    type="textarea"
                    class="validate-required"
                    name="message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>
                <div class="col-xs-12">
                  <button
                    id="btn-submit"
                    type="submit"
                    class="btn btn--primary type--uppercase"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
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
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js?render=6Lfe5kwlAAAAAIMs9H9qX2E9X7qdK3PbdRwP6iFg",
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
#errorMessages {
  display: none;
  margin: 0 10px 15px 10px;
  padding: 8px 35px 8px 30px;
  color: #b94a48;
  background-color: #f2dede;
  border: 2px solid #eed3d7;
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

#success {
  display: none;
}

.success-msg {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  color: #270;
  background-color: #dff2bf;
}

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
