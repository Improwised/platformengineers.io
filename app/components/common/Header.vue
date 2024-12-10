<template>
  <div class="container">
    <div class="row py-2">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div>
          <h1 class="h2 mb-0">{{ title }}</h1>
          <div v-if="authors" class="lh-1 mb-3">
            {{ dateTime }} |
            {{ timeToRead }}
          </div>
          <div v-if="description" class="lead" v-html="description"></div>
          <p v-if="caseStudy" style="font-size: 16px; max-width: 300px">
            {{ dateTime }}
          </p>
          <div class="row">
            <div
              v-for="author in authors"
              :key="author.id"
              class="col-lg-4 col-md-12"
            >
              <div class="d-flex align-items-center mt-3">
                <div
                  class="d-flex align-items-center mr-2"
                  style="border-radius: 200px"
                >
                  <nuxt-img
                    v-if="author.directus_users_id.avatar"
                    :src="$urls.assets(author.directus_users_id.avatar)"
                    :alt="title"
                    :title="title"
                    format="webp"
                    height="40"
                    width="32"
                    class="p-0 m-0 rounded author-s"
                  />
                </div>
                <div>
                  <strong class="m-0 p-0 lh-1">
                    {{ author.directus_users_id.first_name }}
                    {{ author.directus_users_id.last_name }}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div v-if="contactus">
            <Button text="Contact us" />
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <nuxt-img
          v-if="image"
          :src="image"
          :alt="`${title} | Platform Engineers`"
          height="400"
          format="webp"
          class="img-dim"
          decoding="async"
          style="color: transparent"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    contactus: {
      type: Boolean,
    },
    avtar: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    dateTime: {
      type: String,
    },
    timeToRead: {
      type: String,
    },
    creator: {
      type: Boolean,
    },
    caseStudy: {
      type: Boolean,
    },
    authors: {
      type: Object,
    },
  },
};
</script>
