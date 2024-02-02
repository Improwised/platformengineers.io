<template>
  <div class="container">
    <div class="row py-2">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div>
          <h2>{{ title }}</h2>
          <div v-if="description" class="lead" v-html="description"></div>
          <p v-if="caseStudy" style="font-size: 16px; max-width: 300px">
            {{ dateTime }}
          </p>
          <div v-if="creator" class="d-flex align-items-center mt-3">
            <div
              class="d-flex align-items-center mr-2"
              style="border-radius: 200px"
            >
              <nuxt-img
                v-if="avtar"
                :src="$urls.assets(avtar)"
                :alt="title"
                :title="title"
                format="png"
                height="40"
                width="32"
                class="p-0 m-0 rounded author-s"
              />
            </div>
            <div>
              <strong class="m-0 p-0 lh-1">
                {{ firstName }}
                {{ lastName }}
              </strong>
              <div class="lh-1">
                {{ dateTime }} |
                {{ timeToRead }}
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
          loading="lazy"
          height="400px"
          class="img-dim"
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
  },
};
</script>
