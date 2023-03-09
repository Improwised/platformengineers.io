export const strict = false;

export const state = () => ({
  categories: [],
  services: [],
  generate: false,
});

export const mutations = {
  categories(state, categories) {
    state.categories = categories;
  },
  services(state, services) {
    state.services = services;
  },
  generate(state, generate) {
    state.generate = generate;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }) {
    // await dispatch("categories").then((categories) => {
    //   commit("categories", categories.data);
    //   if (process.argv[2] && process.argv[2] === "generate") {
    //     commit("generate", true);
    //   }
    // });
    await dispatch("services").then((services) => {
      commit("services", services.data);
      if (process.argv[2] && process.argv[2] === "generate") {
        commit("generate", true);
      }
    });
  },

  categories({ commit }, slug) {
    return this.$axios.$get(this.$urls.categories);
  },

  services({ commit }, slug) {
    return this.$axios.$get(this.$urls.servicesNames);
  },
};
