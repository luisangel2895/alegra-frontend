import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("SearchSection and ImagesSection are mounted in Home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("search-section-stub").exists()).toBeTruthy();
    expect(wrapper.find("images-section-stub").exists()).toBeTruthy();
  });
});
