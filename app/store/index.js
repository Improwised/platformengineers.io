export const strict = false;

export const state = () => ({
  generate: false,
});

export const mutations = {
  generate(state, generate) {
    state.generate = generate;
  },
};

export const actions = {};
