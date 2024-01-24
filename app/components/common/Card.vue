<template>
    <div
      class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"
    >
      <div class="mb-4 zi-0" v-if="iconImage">
        <nuxt-img
          :src="$urls.assets(iconImage)"
          :alt="title"
          :title="title"
          format="png"
          loading="lazy"
          height="80px"
          width="80px"
        />
      </div>
      <a  v-if="slug" :href="`/${linkRedirect}/${slug}`" class="t-hover zi-0">
        <h3 class="mb-0 h5">{{ title }}</h3>
      </a>
      <h3 v-else class="mb-0 zi-0 h5">{{ title }}</h3>
      <p v-if="description" class="m-0 zi-0">{{ description }}monika</p>
      <a v-if="slug"
        :href="`/${linkRedirect}/${slug}`"
        class="d-lg-none mt-4 mb-0 text-center zi-0"
      >
        Learn More
      </a>
    </div>
</template>

<script>
export default {
  props: {
    iconImage: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    linkRedirect: {
      type: String
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
