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
              <div v-if="item.authors" class="lh-1 mb-2">
                {{ item.date_created | formatDateTime }} |
                {{ item.time_to_read }}
              </div>
              <div v-if="item.authors" class="row">
                <div class="col-lg-12">
                  <div
                    class="avatar-group avatar-group-lg avatar-group-overlapped mr-40 mt-25"
                  >
                    <div
                      v-for="author in item.authors"
                      :key="author.id"
                      class="avatar"
                    >
                      <img
                        :src="$urls.assets(author.directus_users_id.avatar)"
                        class="avatar-img rounded-circle"
                        :alt="author.directus_users_id.first_name"
                        :title="
                          author.directus_users_id.first_name +
                          ' ' +
                          author.directus_users_id.last_name
                        "
                      />
                    </div>
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

.avatar-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.avatar-group {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.avatar-group .avatar {
  font-size: 0.9rem;
  width: 2.625rem;
  height: 2.625rem;
}

.avatar-group .avatar .avatar-img,
.avatar-group .avatar .avatar-text {
  border: 2px solid #fff;
}

.avatar-group.avatar-group-overlapped .avatar {
  margin-right: -13px;
}

.avatar-group.avatar-group-overlapped .avatar:hover {
  z-index: 1;
}
</style>
