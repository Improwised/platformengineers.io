<template>
  <div v-if="blog" class="main-container blog">
    <div class="blog-bk">
      <Navigation />
      <Header
        :title="blog.title"
        :image="$urls.assets(blog.image.id)"
        :avtar="blog.user_created.avatar"
        :first-name="blog.user_created.first_name"
        :last-name="blog.user_created.last_name"
        :date-time="blog.date_created | formatDateTime"
        :time-to-read="blog.time_to_read"
        :creator="true"
      />
    </div>

    <section class="bg-- wave-bk-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 bs-11 p-5 b-30 bg-white">
            <div
              v-if="blog.content"
              class="fc-lead ul-list"
              v-html="blog.content"
            ></div>

            <hr />
            <div class="d-flex align-items-center flex-wrap">
              <h5
                v-for="(tag, index) in blog.tags"
                :key="index"
                class="mr-2 mb-2 mt-0 py-1 px-2 bg-secondary text-white"
                style="border-radius: 10px; font-weight: normal"
              >
                {{ tag }}
              </h5>
            </div>
            <hr />
            <div class="article__share mt-0">
              <ul
                class="social-list list-inline list--hover blog_social"
                style="margin: 0 !important; padding: 0 !important"
              >
                <!-- <span class="h4 d-inline"> Share : </span> -->
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="email"
                    :title="`${blog.title}`"
                    :url="`${baseUrlPath}`"
                    :description="`${strippedHtml(blog.description)}`"
                  >
                    <i class="socicon socicon-google icon icon--xs"></i>
                  </ShareNetwork>
                </li>

                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="linkedin"
                    :title="`${blog.title}`"
                    :url="`${baseUrlPath}`"
                    :description="`${strippedHtml(blog.description)}`"
                  >
                    <i class="socicon socicon-linkedin icon icon--xs"></i>
                  </ShareNetwork>
                </li>
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="twitter"
                    :title="`${blog.title}`"
                    :url="`${baseUrlPath}`"
                  >
                    <i class="socicon socicon-twitter icon icon--xs"></i>
                  </ShareNetwork>
                </li>
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="facebook"
                    :title="`${blog.title}`"
                    :description="`${strippedHtml(blog.description)}`"
                    :url="`${baseUrlPath}`"
                    :quote="`${blog.title}`"
                    hashtags="blog"
                  >
                    <i class="socicon socicon-facebook icon icon--xs"></i>
                  </ShareNetwork>
                </li>
                <li class="list-inline-item mr-0">
                  <ShareNetwork
                    network="whatsapp"
                    :url="`${baseUrlPath}`"
                    :title="`${blog.title}`"
                    :description="`${strippedHtml(blog.description)}`"
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
    //  const tagsname = "";
    const blog = await app.$axios.$get(app.$urls.blog(title));
    // blog.data[0].content = app.$unescapeHTML(blog.data[0].content);
    blog.data[0].content = app.$dImage(blog.data[0].content);
    // blog.data[0].content = await app.$gist(blog.data[0].content);
    return { blog: blog.data[0] };
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
    const image =
      this.blog?.image?.id &&
      this.$img(this.$urls.assets(this.blog.image.id), {
        format: "png",
        height: "400px",
      });

    const title = `${this.blog && this.blog.seo_title} | Platform Engineers`;
    const description = `${
      this.blog && this.blog.seo_description
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
          content: process.env.BASE_URL + this.$route.path + "/",
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
          href: process.env.BASE_URL + this.$route.path + "/",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
          body: true,
        },
        {
          src: "/js/hljs.js",
          body: true,
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
.blog ul {
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

.blog-svg {
  overflow: hidden;
  position: relative;
  background: transparent !important;
}

.blog-svg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  background: url("/img/card47.png") white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.wave-bk-1 {
  overflow: hidden;
  position: relative;
}

.wave-bk-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
  background: url("/img/s2.svg");
}

.blog blockquote {
  font-size: 1em;
}

.blog pre {
  padding: 0 !important;
}

.blog table tr:not(:last-of-type) {
  border: none;
}
</style>
