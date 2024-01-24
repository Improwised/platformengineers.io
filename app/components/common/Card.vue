<template>
    <div
      class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"
    >
      <div class="mb-4 zi-0">
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
      <a :href="`/services/${slug}`" class="t-hover zi-0">
        <h3 class="mb-0 h5">{{ title }}</h3>
      </a>
      <p class="m-0 zi-0">{{ description }}monika</p>
      <a
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
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
