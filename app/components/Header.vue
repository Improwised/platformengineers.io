<template>
  <div>
    <div class="container">
      <div class="row py-2">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <div>
            <div>
              <h2>{{ title }}</h2>
              <p v-if="description" class="lead">
                {{ description }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <nuxt-img
            v-if="image"
            :src="image"
            :alt="`${title} | Platform Engineers`"
            format="png"
            loading="lazy"
            height="400px"
            class="img-dim"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  },
};
</script>
