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
                Contact via the form below to talk more about your project,
                ideas or any others technical queries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="bg-- contact-us-form-bk">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 offset-md-3 bs-1 p-5 br-30">
            <div id="errorMessages"></div>
            <div id="success">
              <div class="success-msg">
                <b
                  >Message has been sent successfully. We will contact within 1
                  business day.</b
                >
              </div>
            </div>
            <form
              id="contactus-submit"
              action="https://rnnmftp4t7.execute-api.us-west-2.amazonaws.com/production/api/contactus"
            >
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
                <div id="recaptcha"></div>
              </div>
              <div class="col-xs-12">
                <button
                  id="btn-submit"
                  type="submit"
                  class="btn btn--primary type--uppercase"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
            <p class="text-center mt-5 mb-0">
              We try to respond to all enquiries within 1 business day.
            </p>
          </div>
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
    const contactTitle = "Contact - Improwised Technologies Pvt. Ltd.";
    const contactDescription =
      "We are open from 10am - 7pm on weekdays. For any further info please feel free to Contact us on careers@improwised.com.";
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
          content: contactTitle,
        },
        {
          property: "twitter:description",
          content: contactDescription,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/logo.png",
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
  opacity: 0.8;
  z-index: -1;
  background: url("/img/a112.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
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
