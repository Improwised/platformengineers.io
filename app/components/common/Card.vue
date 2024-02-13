<template>
  <div
    class="text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"
  >
    <div
      v-if="imageType == 'svg-text' && iconImage != ''"
      class="svg mb-4"
      v-html="iconImage"
    ></div>
    <div v-if="imageType != 'svg-text' && iconImage != ''" class="mb-4 zi-0">
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
    <a v-if="slug" :href="`/${linkRedirect}/${slug}/`" class="t-hover zi-0">
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
      :href="`/${linkRedirect}/${slug}/`"
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
      default: "",
    },
    imageType: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    linkRedirect: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.bs-1 {
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.45),
    -25px 0 20px -20px rgba(0, 0, 0, 0.45);
}

.svg svg {
  width: 100%;
  height: 80px;
}

.list-style-content ul {
  list-style: inherit;
  padding: revert;
}

.card-svg {
  overflow: hidden;
  position: relative;
  background: transparent !important;
}

.card-svg::before {
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
</style>
