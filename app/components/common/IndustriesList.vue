<template>
  <div v-if="list && list.length" class="bg-- pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="masonry__item col-lg-4 col-md-6"
        >
          <article class="b-30 bs-11">
            <div>
              <a
                :href="`${readmore}${item.slug}/`"
                class="industry d-flex align-items-center justify-content-center p-4"
                style="height: 300px"
              >
                <nuxt-img
                  v-if="item.image"
                  :src="$urls.assets(item.image)"
                  :alt="item.title"
                  :title="item.title"
                />
              </a>
            </div>

            <div class="feature__body px-4 pb-4">
              <a :href="`${readmore}${item.slug}/`" class="t-hover">
                <div class="text-center">
                  <h2 class="h5" :title="item.title">
                    {{ item.title }}
                  </h2>
                </div>
              </a>
              <p class="flex-grow-1 m-0 text-center">
                {{ item.description }}
              </p>
              <a
                :href="`${readmore}${item.slug}/`"
                class="d-lg-none color-theme"
              >
                Read More
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
    readmore: {
      type: String,
    },
  },
};
</script>

<style>
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
