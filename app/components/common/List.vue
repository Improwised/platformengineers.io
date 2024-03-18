<template>
  <div v-if="list && list.length" class="bg-- pt-5">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="masonry__item col-lg-4 col-md-6"
        >
          <article class="b-30 bs-11">
            <div>
              <a
                :href="`${readmore}${item.slug}/`"
                class="block d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  v-if="item.image"
                  :src="$urls.assets(item.image.id)"
                  :alt="item.title"
                  :title="item.title"
                  height="300"
                  width="300"
                />
              </a>
            </div>
            <div class="feature__body px-4 pb-4">
              <a :href="`${readmore}${item.slug}/`" class="t-hover">
                <div>
                  <h2 class="title h5 pt-4" :title="item.title">
                    {{ item.title }}
                  </h2>
                </div>
              </a>
              <div v-if="showavtar" class="d-flex align-items-center mt-1">
                <div
                  class="d-flex align-items-center mr-2"
                  style="border-radius: 200px"
                >
                  <nuxt-img
                    v-if="item.user_created.avatar"
                    :src="$urls.assets(item.user_created.avatar)"
                    :alt="item.title"
                    :title="item.title"
                    format="png"
                    height="40"
                    width="32"
                    class="p-0 m-0 rounded author-s"
                  />
                </div>
                <div>
                  <strong class="m-0 p-0 lh-1">
                    {{ item.user_created.first_name }}
                    {{ item.user_created.last_name }}
                  </strong>
                  <div class="lh-1">
                    {{ item.date_created | formatDateTime }} |
                    {{ item.time_to_read }}
                  </div>
                </div>
              </div>
              <div class="m-0">
                <div v-if="datetime">
                  {{ item.date_created | formatDateTime }}
                </div>
              </div>
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
    showavtar: {
      type: Boolean,
    },
    datetime: {
      type: Boolean,
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
