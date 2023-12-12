<template>
  <div class="main-container assessment">
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Unit -->
    <div class="as-hero" :style="`background-image: url(${hero})`">
      <div class="container py-sm-5">
        <div class="row py-5">
          <div class="col-lg-6">
            <h1 class="m-0 p-0">
              Assessment for
              <span class="as-color-o">Application Performance</span> and
              <span class="as-color-o">Infrastructure Cost</span> efficiency.
            </h1>
            <button
              class="btn my-4 px-5 as-call-to-action b-30"
              @click="scrollPricingSection"
            >
              GET ASSESSMENT
            </button>
          </div>
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              src="/img/as/hero/main.png"
              alt="Assessment by platformengineers"
              title="Assessment by platformengineers"
              format="png"
              loading="lazy"
              width="540"
              quality="80"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Why Us -->
    <div class="py-3 py-sm-5 as-whyus">
      <h2 class="text-center">Why Assessment</h2>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center py-3 py-sm-5"
          >
            <nuxt-img
              src="/img/as/whyus/performance.png"
              alt="Performance-focused Application Assessment | platformengineers"
              title="Performance-focused Application Assessment | platformengineers"
              format="png"
              loading="lazy"
              width="514"
              quality="80"
            />
          </div>
          <div class="col-lg-6 py-3 py-sm-5">
            <strong class="as-color-o as-f-xxxl">IMPROVE PERFORMANCE</strong>
            <h3>Performance-focused Application Assessment</h3>
            <p>
              Revitalize your applications with a focus on performance, scalable
              architecture, and fortified reliability.

              <br />
              <br />

              The mentioned parameters are usually identified as performance
              bottlenecks in general. However, it's important to know that,
              based on pre-assessment call, our attention may primarily center
              on 3 to 4 key factors aimed at improving overall performance.
            </p>
            <ul class="as-ul-style">
              <li>Evaluate app speed, identifying performance bottlenecks</li>
              <li>
                Examine serverless solutions, exploring potential scalability
              </li>
              <li>
                Review dependencies, considering options for horizontal scaling
              </li>
              <li>
                Analyze caching strategies, noting potential for scalable
                distribution
              </li>
              <li>Check load balancing, understanding traffic flow</li>
              <li>
                Examine asynchronous processing, assessing the role of message
                queues
              </li>
              <li>
                Review CDN impact on speed, exploring possibilities for adaptive
                content delivery
              </li>
              <li>
                Evaluate the effectiveness of monitoring, deriving insights from
                analytics
              </li>
              <li>
                Provide observations on automated testing, suggest
                considerations for continuous deployment strategies
              </li>
            </ul>
          </div>
        </div>

        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-lg-6 py-3 py-sm-5">
            <strong class="as-color-o as-f-xxxl">REDUCE COST</strong>
            <h3>Cost-focused Infrastructure assessment</h3>
            <p>
              Unlock efficiency with insights into resource utilization,
              cost-conscious strategies, robust security measures, and proactive
              monitoring.

              <br />
              <br />

              The mentioned parameters are usually identified as cost efficiency
              bottlenecks in general. However, it's important to know that,
              based on pre-assessment call, our attention may primarily center
              on 3 to 4 key factors aimed at improving overall cost efficiency.
            </p>
            <ul class="as-ul-style">
              <li>Evaluate underutilized resources</li>
              <li>Assess load balancing and auto-scaling</li>
              <li>
                Recommendations for optimizing cost usage by leveraging
                strategic allocation of Spot and Reserved Instances
              </li>
              <li>Evaluate containerization impact</li>
              <li>Assess orchestration tool effectiveness</li>
              <li>Evaluate security measures</li>
              <li>Review automation and IaC impact</li>
              <li>Evaluate monitoring</li>
              <li>Analysis for predictive capacity planning</li>
            </ul>
          </div>
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center py-3 py-sm-5"
          >
            <nuxt-img
              src="/img/as/whyus/cost.png"
              alt="Cost-focused Infrastructure assessment | platformengineers"
              title="Cost-focused Infrastructure assessment | platformengineers"
              format="png"
              loading="lazy"
              width="522"
              quality="80"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- features: Performance-focused Application Assessment -->
    <div
      class="as-features py-3 py-sm-5"
      :style="`background-image: url(${feature})`"
    >
      <div class="container">
        <div class="row">
          <div class="text-center col-md-10 offset-md-1 py-3 py-sm-5">
            <div class="text-center">
              <nuxt-img
                src="/img/as/features/architecture/icon.svg"
                alt="Performance-focused Application Assessment | features | platformengineers"
                title="Performance-focused Application Assessment | features | platformengineers"
                format="png"
                loading="lazy"
                width="80"
                height="80"
                quality="80"
              />
            </div>
            <br />
            <h2 class="m-0">Performance-focused Application Assessment</h2>
            <p class="lead">
              Evaluate the architectural design for optimal speed and
              efficiency, considering key areas
            </p>
          </div>
          <div class="col-md-6 col-lg-4 d-flex py-3 py-sm-5">
            <div>
              <div class="mb-4 zi-0">
                <nuxt-img
                  src="/img/as/features/architecture/performance-driven-cloud-changes.svg"
                  alt="Application-Centric Performance Evaluation | Performance-focused Application Assessment | features | platformengineers"
                  title="Application-Centric Performance Evaluation | Performance-focused Application Assessment | features | platformengineers"
                  format="png"
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="80"
                />
              </div>
              <h5 class="mb-0 zi-0">
                Application-Centric Performance Evaluation
              </h5>
              <p class="zi-0">
                Channel efforts exclusively towards assessing and enhancing the
                performance of your application. Recommend targeted
                optimizations to align the architecture with performance goals
                and adapt to evolving application requirements.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex py-3 py-sm-5">
            <div>
              <div class="mb-4 zi-0">
                <nuxt-img
                  src="/img/as/features/architecture/enhanced-database-server-performance.svg"
                  alt="Database Server Efficiency | Performance-focused Application Assessment | features | platformengineers"
                  title="Database Server Efficiency | Performance-focused Application Assessment | features | platformengineers"
                  format="png"
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="80"
                />
              </div>
              <h5 class="mb-0 zi-0">Database Server Efficiency</h5>
              <p class="zi-0">
                Direct attention to strategies aimed at elevating the
                performance of your database server within the application
                context. Optimizing database operations helps to enhance the
                overall efficiency of the application.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex py-3 py-sm-5">
            <div>
              <div class="mb-4 zi-0">
                <nuxt-img
                  src="/img/as/features/architecture/robust-disaster-recovery-strategies.svg"
                  alt="Safeguarding Applications for Recovery | Performance-focused Application Assessment | features | platformengineers"
                  title="Safeguarding Applications for Recovery | Performance-focused Application Assessment | features | platformengineers"
                  format="png"
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="80"
                />
              </div>
              <h5 class="mb-0 zi-0">Safeguarding Applications for Recovery</h5>
              <p class="zi-0">
                Examine your backups and recommend steps to fortify your app's
                disaster recovery. Ensure your applications can handle
                disruptions, keeping your business operations running smoothly
                and uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- features: Infrastructure Assessment -->
    <div
      class="as-features py-3 py-sm-5"
      :style="`background-image: url(${feature})`"
    >
      <div class="container">
        <div class="row">
          <div class="text-center col-md-10 offset-md-1 py-3 py-sm-5">
            <div class="text-center">
              <nuxt-img
                src="/img/as/features/infrastructure/icon.svg"
                alt="Cost-focused Infrastructure Assessment | features | platformengineers"
                title="Cost-focused Infrastructure Assessment | features | platformengineers"
                format="png"
                loading="lazy"
                width="80"
                height="80"
                quality="80"
              />
            </div>
            <br />
            <h2 class="m-0">Cost-focused Infrastructure Assessment</h2>
            <p class="lead">
              Evaluate your infrastructure to optimize output while minimizing
              costs, addressing various aspects
            </p>
          </div>
          <div class="col-md-6 col-lg-4 d-flex py-3 py-sm-5">
            <div>
              <div class="mb-4 zi-0">
                <nuxt-img
                  src="/img/as/features/infrastructure/cost-effective-resource-utilization.svg"
                  alt="Cost-focused Infrastructure Assessment | features | platformengineers"
                  title="Cost-focused Infrastructure Assessment | features | platformengineers"
                  format="png"
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="80"
                />
              </div>
              <h5 class="mb-0 zi-0">Cost-Effective Resource Utilization</h5>
              <p class="zi-0">
                Evaluate resource utilization to enhance efficiency while
                identifying cost-saving opportunities. Ensure your
                infrastructure operates at its peak without compromising on
                cost-effectiveness.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex py-3 py-sm-5">
            <div>
              <div class="mb-4 zi-0">
                <nuxt-img
                  src="/img/as/features/infrastructure/security-and-compliance-assurance.svg"
                  alt="Security and Compliance | Cost-focused Infrastructure Assessment | features | platformengineers"
                  title="Security and Compliance | Cost-focused Infrastructure Assessment | features | platformengineers"
                  format="png"
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="80"
                />
              </div>
              <h5 class="mb-0 zi-0">Security and Compliance</h5>
              <p class="zi-0">
                Verify security measures through policy enforcement and
                permissions, coupled with a comprehensive check for regulatory
                compliance. Receive recommendations to fortify web application
                security and safeguard critical data.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex py-3 py-sm-5">
            <div>
              <div class="mb-4 zi-0">
                <nuxt-img
                  src="/img/as/features/infrastructure/real-time-monitoring-efficiency.svg"
                  alt="Real-Time Monitoring | Cost-focused Infrastructure Assessment | features | platformengineers"
                  title="Real-Time Monitoring | Cost-focused Infrastructure Assessment | features | platformengineers"
                  format="png"
                  loading="lazy"
                  width="80"
                  height="80"
                  quality="80"
                />
              </div>
              <h5 class="mb-0 zi-0">Real-Time Monitoring</h5>
              <p class="zi-0">
                Assess real-time metric tracking for actionable insights and
                review existing alerting configurations. Ensure efficient
                monitoring and incident response readiness for proactive
                management, minimizing downtime and enhancing system stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- pricing -->
    <div>
      <div class="as-pricing py-3 py-sm-5">
        <div class="container">
          <div class="row py-3 py-sm-5">
            <div class="text-center col-md-8 offset-md-2">
              <h2 class="m-0">Pricing</h2>
              <p class="lead">
                We prioritize genuine human connections and believe in
                understanding your needs through meaningful conversations before
                any financial commitment. It's our commitment to ensure a
                personalized and satisfactory experience.
              </p>
            </div>
          </div>
          <div class="row as-pricing-row text-white">
            <div
              class="col-lg-8 p-3 p-sm-5 d-flex align-items-center justify-content-center"
            >
              <div>
                <p>
                  This assessment, facilitated by the PlatformEngineers, is a
                  unique offering in the market, setting it apart with
                  distinctive technical capabilities not found elsewhere.
                </p>
                <hr />
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
                >
                  <div class="d-flex align-items-center">
                    <nuxt-img
                      src="/img/as/pricing/check.png"
                      alt="No Hidden Fees | Pricing | platformengineers"
                      title="No Hidden Fees | Pricing | platformengineers"
                      format="png"
                      loading="lazy"
                      width="16"
                      height="16"
                      quality="80"
                    />
                    &nbsp;&nbsp;No Hidden Fees
                  </div>
                  <div class="d-flex align-items-center">
                    <nuxt-img
                      src="/img/as/pricing/check.png"
                      alt="Money back guarantee | Pricing | platformengineers"
                      title="Money back guarantee | Pricing | platformengineers"
                      format="png"
                      loading="lazy"
                      width="16"
                      height="16"
                      quality="80"
                    />
                    &nbsp;&nbsp;Money back guarantee
                  </div>
                  <div class="d-flex align-items-center">
                    <nuxt-img
                      src="/img/as/pricing/check.png"
                      alt="Get Tax invoice | Pricing | platformengineers"
                      title="Get Tax invoice | Pricing | platformengineers"
                      format="png"
                      loading="lazy"
                      width="16"
                      height="16"
                      quality="80"
                    />
                    &nbsp;&nbsp;Get Tax invoice
                  </div>
                </div>
                <div class="text-center pt-5">
                  <p>
                    Check out the <a href="/assessment/#faqs">FAQs</a> if you
                    still have questions.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="as-pricing"
              class="col-lg-4 d-flex align-items-center justify-content-center as-p-block p-3 p-sm-5"
              :style="`background-image: url(${pricing})`"
            >
              <div class="d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <span class="badge badge-warning">Limited-time offer</span>
                  <br />
                  <br />
                  <h2
                    class="m-0 p-0 text-white"
                    style="font-size: 4rem; line-height: 1"
                  >
                    $250
                  </h2>
                  <p class="m-0" style="font-size: 1.3rem; color: gray">
                    <s>$1000</s> / 75% off
                  </p>
                  <br />
                  <a
                    href="https://calendly.com/platform-engineers/30min"
                    class="btn px-5 as-call-to-action b-30 m-0"
                    target="_blank"
                  >
                    SCHEDULE A CALL
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- process -->
          <div class="row pt-3 pt-sm-5">
            <div class="text-center col-md-8 offset-md-2 pt-3 pt-sm-5">
              <h2 class="m-0">Process</h2>
            </div>
          </div>

          <div class="row d-block d-sm-none pb-3 pb-sm-5">
            <div class="col">
              <div class="process-2 row">
                <div class="col-md-3">
                  <div class="process__item">
                    <h5>Start Assessment</h5>
                    <p>
                      Begin by clicking "Schedule a Call." Complete a brief form
                      and arrange a 15-minute Google Calendar call to delve into
                      your specific needs and challenges. Let's start
                      Assessment!
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="process__item">
                    <h5>NDA process - Privacy assurance</h5>
                    <p>
                      After our assessment call, we will proceed to the signing
                      of the NDA. We respect the confidentiality of your
                      infrastructure and proprietary information. So, if you
                      have your own NDA, feel free to share it with us, and we
                      will reciprocate by signing it. Otherwise, we have our
                      template of a (NDA) to ensure the privacy and
                      confidentiality of your data.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="process__item">
                    <h5>Provide Prerequisites & Pay</h5>
                    <p>
                      Following the assessment call and NDA confirmation, share
                      the requested prerequisites and grant access. Initiate the
                      assessment by making a secure USD 250 payment through the
                      provided email link. Your commitment fuels the process.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="process__item">
                    <h5>Outcome Discussion</h5>
                    <p>
                      Based on a discussed timeline, receive a comprehensive
                      checklist of actionable items. Later schedule a call to
                      discuss it in detail. Either you can implement actions
                      with your team or we can help you do it for an additional
                      fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row d-none d-sm-block pt-3 pt-sm-5">
            <div class="col-lg-12 text-center">
              <nuxt-img
                src="/img/as/pricing/process.png"
                alt="process | assessment | platformengineers"
                title="process | assessment | platformengineers"
                format="png"
                loading="lazy"
                width="1110"
                quality="80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- faqs -->
    <div class="as-faqs py-5">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-8 offset-md-2 py-5">
            <h2 class="m-0">FAQs</h2>
            <p class="lead">
              Explore our FAQs for quick answers to common questions. Find
              information on service, offering, features, payments,
              deliverables.
            </p>
          </div>
          <div class="pb-5">
            <div
              v-for="(faq, index) in faqs"
              :key="`faq${index}`"
              class="col-md-10 offset-md-1 as-faq"
              :class="{ 'mt-3': index !== 0 }"
            >
              <div class="py-3 bg-white as-bs-1 px-3 rounded">
                <div
                  class="d-flex align-items-center"
                  @click="faqs[index].isOpen = !faqs[index].isOpen"
                >
                  <div class="mr-3 pt-1 as-w-25px as-mw-25px">
                    <nuxt-img
                      src="/img/as/faqs/icon.svg"
                      :alt="faq.question"
                      :title="faq.question"
                      format="png"
                      loading="lazy"
                      width="25"
                      height="25"
                      quality="80"
                      :class="{
                        rotate90: faqs[index].isOpen,
                        rotate0: !faqs[index].isOpen,
                      }"
                    />
                  </div>
                  <h5 class="m-0 as-f-16 pts as-lh1 font-weight-bold">
                    {{ faq.question }}
                  </h5>
                </div>
                <div
                  class="ml-3"
                  :class="{
                    'faq-h-auto': faqs[index].isOpen,
                    'faq-h-0': !faqs[index].isOpen,
                  }"
                >
                  <div class="text-dark as-f-16 mt-3 as-ml-25px">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div
      class="d-flex align-items-center justify-content-center as-call-to-action-block"
      :style="`background-image: url(${callToAction})`"
    >
      <div
        class="d-flex align-items-center align-self-stretch p-3 p-sm-5 text-center"
      >
        <div>
          <h2 class="text-white">
            Let's elevate your application performance and infrastructure cost
            efficiency
          </h2>
          <button
            class="btn px-5 as-call-to-action b-30 m-0"
            @click="scrollPricingSection"
          >
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import faqs from "@/static/js/faqs.js";

export default {
  components: {
    Navigation,
  },
  layout: "theme",
  data() {
    return {
      faqs,
      isFaqsVisible: "",

      hero: this.$img("/img/as/hero/background.png", {
        format: "png",
        quality: "80",
        height: "543",
      }),

      feature: this.$img("/img/as/features/background.jpg", {
        format: "png",
        quality: "80",
        width: "1875",
      }),

      caseStudy: this.$img("/img/as/case-study/background.png", {
        format: "png",
        width: "425",
        height: "600",
        quality: "80",
      }),

      cardCaseStudy: this.$img("/img/as/case-study/card-background.png", {
        format: "png",
        width: "425",
        height: "600",
        quality: "80",
      }),

      pricing: this.$img("/img/as/pricing/price-background.png", {
        format: "png",
        width: "378",
        quality: "80",
      }),

      callToAction: this.$img("/img/as/call-to-action/background.svg", {
        format: "png",
        width: "378",
        quality: "80",
      }),
    };
  },

  head() {
    const seoTitle = "Assessment by Platformengineers.io";
    const seoDescription =
      "Assessment for application performance and infrastructure cost efficiency";
    return {
      title: seoTitle,
      meta: [
        {
          name: "description",
          content: seoDescription,
        },
        {
          name: "title",
          content: seoTitle,
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
          content: seoTitle,
        },
        {
          property: "og:description",
          content: seoDescription,
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "/img/as/hero/main.png",
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
          content: seoTitle,
        },
        {
          property: "twitter:description",
          content: seoDescription,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/as/hero/main.png",
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
  methods: {
    scrollPricingSection() {
      document.getElementById("as-pricing").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>

<style>
.assessment * {
  font-family: "Open Sans", sans-serif !important;
}

.as-hero {
  color: white;
  border-radius: 15px;
  background-size: cover;
  margin: 0 15px 15px 15px;
  background-position: bottom;
  background-repeat: no-repeat;
}

.as-hero * {
  color: white;
}

.as-hero h1 {
  font-size: 48px;
}

@media only screen and (max-width: 1199px) {
  .as-hero h1 {
    font-size: 38px;
  }
}

@media only screen and (max-width: 991px) {
  .as-hero h1 {
    font-size: 48px;
  }
}

@media only screen and (max-width: 767px) {
  .as-hero {
    margin: 0;
    border-radius: 0;
  }

  .as-hero h1 {
    font-size: 38px;
  }
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

.as-f-xxxl {
  font-size: 0.8rem;
}

.as-ul-style {
  list-style: circle;
  padding-left: 20px;
}

div.as-whyus .container {
  max-width: 1400px;
}

.as-features,
.as-faqs {
  margin: 15px;
  border-radius: 15px;
  border: 1px solid #eee;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}

@media only screen and (max-width: 767px) {
  .as-features,
  .as-faqs {
    margin: 0;
    border-radius: 0;
  }
}

.mw-900 {
  max-width: 900px;
}

.as-case-study {
  margin: 15px 15px 0 15px;
  border-radius: 15px;
  border: 1px solid #eee;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 767px) {
  .as-case-study {
    margin: 0;
    border-radius: 0;
  }
}

.as-case-study .as-card {
  background: white;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}

.as-case-study .cs-results {
  margin-top: -2px;
  padding: -5px auto;
}

.as-case-study .cs-results div {
  flex-grow: 1;
  padding: 10px;
  border: 2px dotted #ff900a;
}

.as-case-study .cs-results p {
  min-height: auto;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

.as-pricing .as-pricing-row {
  border-radius: 3rem;
  border: 4px solid #d8bfd8;
  background-color: rgb(24, 24, 27);
}

.as-pricing .as-p-block {
  border-radius: 3rem;
  background-size: cover;
}

@media only screen and (max-width: 767px) {
  .as-pricing .as-pricing-row,
  .as-pricing .as-p-block {
    border-radius: 0;
  }
}

.as-faq h5,
.as-faq img {
  cursor: pointer;
}

.pts {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.faq-h-0 {
  max-height: 0;
  overflow: hidden;
}

.faq-h-auto {
  max-height: 1000px;
}

.rotate0 {
  transform: rotate(0deg);
}

.rotate90 {
  transition: rotate 3s;
  transform: rotate(90deg);
}

.as-f-16 {
  font-size: 16px;
}

.as-f-14 {
  font-size: 14px;
}

.as-bs-1 {
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
}

.as-lh1 {
  line-height: 1.5;
}

.as-w-25px {
  width: 25px;
  min-width: 25px;
}

.as-mw-25px {
  min-width: 25px;
}

.as-ml-25px {
  margin-left: 25px;
}

.as-call-to-action-block {
  margin: 15px;
  border-radius: 15px;
  background-color: #093097;
}

@media only screen and (max-width: 767px) {
  .as-call-to-action-block {
    margin: 0;
    border-radius: 0;
  }

  .as-call-to-action-block h2 {
    font-size: 22px;
  }
}
</style>
