<template>
  <div class="text-center col-md-8 offset-md-2 pb-4">
    <h1 class="mb-10 h2">{{ title }}</h1>
    <p class="para" v-html="description"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
