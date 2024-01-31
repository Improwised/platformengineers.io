<template>
  <div class="text-center col-md-8 offset-md-2 pb-4">
    <h2 class="mb-10">{{ title }}</h2>
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
