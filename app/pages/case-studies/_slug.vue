<template>
  <div v-if="caseStudy" class="main-container case-studies">
    <div class="case-studies-bk">
      <Navigation />
      <Header
        :title="caseStudy.title"
        :image="$urls.assets(caseStudy.image.id)"
        :case-study="true"
        :date-time="caseStudy.date_created | formatDateTime"
      />
    </div>

    <section
      v-if="caseStudy.client_info_title"
      class="bg-- border-bottom wave-bk section-padding"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="text-center">{{ caseStudy.client_info_title }}</h2>
            <div
              class="lead ul-list"
              v-html="caseStudy.client_info_description"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="caseStudy.goal_title"
      class="bg-- border-bottom wave-bk section-padding"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="text-center">{{ caseStudy.goal_title }}</h2>
            <div class="lead ul-list" v-html="caseStudy.goal_description"></div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="caseStudy.solution_title"
      class="bg-- border-bottom wave-bk section-padding"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="text-center">{{ caseStudy.solution_title }}</h2>
            <div
              class="lead ul-list"
              v-html="caseStudy.solution_description"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="caseStudy.technologies_title"
      class="bg-- border-bottom wave-bk section-padding"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="text-center">{{ caseStudy.technologies_title }}</h2>
            <div class="d-flex align-items-center justify-content-center">
              <div
                v-for="(technology, index) in caseStudy.technologies"
                :key="index"
                class="p-2"
              >
                <nuxt-img
                  :src="$urls.assets(technology.directus_files_id.id)"
                  :alt="technology.directus_files_id.title"
                  :title="technology.directus_files_id.title"
                  format="png"
                  loading="lazy"
                  height="40px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="caseStudy.outcome_title"
      class="bg-- border-bottom wave-bk section-padding"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="text-center">{{ caseStudy.outcome_title }}</h2>
            <div
              class="lead ul-list"
              v-html="caseStudy.outcome_description"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="caseStudy.conclusion_title" class="bg-- section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="text-center">{{ caseStudy.conclusion_title }}</h2>
            <div class="lead" v-html="caseStudy.conclusion_description"></div>
            <br />
            <br />
            <br />
            <div class="d-flex align-items-center">
              <h5
                v-for="(tag, index) in caseStudy.tags"
                :key="index"
                class="mx-2 my-0 py-1 px-2 bg-secondary text-white"
                style="border-radius: 10px; font-weight: normal"
              >
                {{
                  tag &&
                  tag.pe_case_studies_tags_id &&
                  tag.pe_case_studies_tags_id.name
                }}
              </h5>
            </div>
            <hr />
            <div class="article__share mt-0">
              <ul
                class="social-list list-inline list--hover blog_social"
                style="list-style: none; padding: 0; margin: 0"
              >
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="email"
                    :title="`${caseStudy.title}`"
                    :url="`${baseUrlPath}`"
                    :description="`${strippedHtml(caseStudy.description)}`"
                  >
                    <i class="socicon socicon-google icon icon--xs"></i>
                  </ShareNetwork>
                </li>

                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="linkedin"
                    :title="`${caseStudy.title}`"
                    :url="`${baseUrlPath}`"
                    :description="`${strippedHtml(caseStudy.description)}`"
                  >
                    <i class="socicon socicon-linkedin icon icon--xs"></i>
                  </ShareNetwork>
                </li>
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="twitter"
                    :title="`${caseStudy.title}`"
                    :url="`${baseUrlPath}`"
                  >
                    <i class="socicon socicon-twitter icon icon--xs"></i>
                  </ShareNetwork>
                </li>
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="facebook"
                    :title="`${caseStudy.title}`"
                    :description="`${strippedHtml(caseStudy.description)}`"
                    :url="`${baseUrlPath}`"
                    :quote="`${caseStudy.title}`"
                    hashtags="caseStudy"
                  >
                    <i class="socicon socicon-facebook icon icon--xs"></i>
                  </ShareNetwork>
                </li>
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="whatsapp"
                    :url="`${baseUrlPath}`"
                    :title="`${caseStudy.title}`"
                    :description="`${strippedHtml(caseStudy.description)}`"
                  >
                    <i class="socicon socicon-whatsapp icon icon--xs"></i>
                  </ShareNetwork>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/common/Header.vue";

export default {
  components: {
    Navigation,
    Header,
  },
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const title = params.slug;
    const caseStudy = await app.$axios.$get(app.$urls.caseStudy(title));
    return { caseStudy: caseStudy.data[0] };
  },
  data() {
    if (process.client) {
      return {
        baseUrlPath: window.location.href, // this.$route.fullPath,
      };
    } else {
      return {
        baseUrlPath: "",
      };
    }
  },
  head() {
    const image = this.$img(this.$urls.assets(this.caseStudy.image.id), {
      format: "png",
      height: "400px",
    });

    const title = `${
      this.caseStudy && this.caseStudy.seo_title
    } | Platform Engineers`;
    const description = `${
      this.caseStudy && this.caseStudy.seo_description
    } | Platform Engineers`;

    return {
      title: title || "",
      meta: [
        {
          name: "description",
          content: description || "",
        },
        {
          name: "title",
          content: title || "",
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
          content: title || "",
        },
        {
          property: "og:description",
          content: description || "",
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
          content: title || "",
        },
        {
          property: "twitter:description",
          content: description || "",
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
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css",
        },
      ],
    };
  },
  methods: {
    strippedHtml(description) {
      const regex = /(<([^>]+)>)/gi;

      return description.replace(regex, "");
    },
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .case-studies-bk {
    border-radius: 0 0 30px 30px;
  }
}

.case-studies ul {
  list-style: inherit;
  padding: revert;
}

.wave-bk::before {
  opacity: 0.04;
  background: url("/img/s2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
</style>
