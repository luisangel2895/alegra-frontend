import { shallowMount } from "@vue/test-utils";

import HeaderComponent from "@/components/shared/HeaderComponent.vue";

describe("Header Component", () => {
  it("Match with the snapshot", () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Names nav-links in the header", () => {
    const wrapper = shallowMount(HeaderComponent);
    const $spanList = wrapper.findAll("span");
    expect($spanList.length).toBe(3);
    expect($spanList[0].text()).toBe("Home");
    expect($spanList[1].text()).toBe("About Me");
    expect($spanList[2].text()).toBe("Photographers");
  });
});
