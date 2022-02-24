import { shallowMount } from "@vue/test-utils";
import SearchSection from "@/components/home/SearchSection.vue";

describe("SearchSection.vue", () => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(SearchSection);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("ImageSearch, TitleSearch and BoxSearch are mounted in SearchSection", () => {
    const wrapper = shallowMount(SearchSection);
    expect(wrapper.find("image-search-stub").exists()).toBeTruthy();
    expect(wrapper.find("title-search-stub").exists()).toBeTruthy();
    expect(wrapper.find("box-search-stub").exists()).toBeTruthy();
  });
});
