<template>
  <div>
    <a
      class="btn btn--primary type--uppercase b-30"
      href="/contact-us"
      title="contact"
    >
      <span class="btn__text"> {{ text }} </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>
