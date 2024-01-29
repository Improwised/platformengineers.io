<template>
  <div
    class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"
  >
    <div
      v-if="imageType == 'svg-text' && iconImage != ''"
      class="svg mb-4"
      v-html="iconImage"
    ></div>
    <div v-else-if="iconImage" class="mb-4 zi-0">
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
    <a v-if="slug" :href="`/${linkRedirect}/${slug}`" class="t-hover zi-0">
      <h3 class="mb-0 h5">{{ title }}</h3>
    </a>
    <!-- zi-0 -->
    <h3 v-else class="mb-0 zi-0 h5">{{ title }}</h3>

    <div
      v-if="description"
      :class="`m-0 zi-0 ul-list list-style-content ${
        $route.params.slug !== 'kubernetes-consulting-services'
          ? ''
          : 'text-left'
      }`"
      v-html="description"
    ></div>
    <!-- <p v-if="description" class="m-0 zi-0">{{ description }}</p> -->
    <a
      v-if="slug"
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
    imageType: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    linkRedirect: {
      type: String,
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
