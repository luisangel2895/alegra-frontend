import { shallowMount } from "@vue/test-utils";

import FooterComponent from "@/components/shared/FooterComponent.vue";

describe("Footer Component", (): void => {
  it("Match with the snapshot", () => {
    const wrapper = shallowMount(FooterComponent);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Name (Angel Orellana) in the footer ", (): void => {
    const wrapper = shallowMount(FooterComponent);
    const $footer = wrapper.find("footer");
    expect($footer.text()).toBe("© Angel Orellana");
  });
});
