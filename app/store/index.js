export const strict = false;

export const state = () => ({
  categories: [],
  services: [],
  generate: false,
  industries: [],
});

export const mutations = {
  categories(state, categories) {
    state.categories = categories;
  },
  services(state, services) {
    state.services = services;
  },
  industries(state, industries) {
    state.industries = industries.slice(0, 5);
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
    await dispatch("industries").then((industries) => {
      commit("industries", industries.data);
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
  industries({ commit }, slug) {
    return this.$axios.$get(this.$urls.industriesNames);
  },
};
