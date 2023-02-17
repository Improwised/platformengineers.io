import { mount } from "@vue/test-utils";
import Index from "@/pages/index.vue";

// eslint-disable-next-line no-undef
describe("Index", () => {
  // eslint-disable-next-line no-undef
  test("is a Vue instance", () => {
    const wrapper = mount(Index);
    // eslint-disable-next-line no-undef
    expect(wrapper.vm).toBeTruthy();
  });
});
