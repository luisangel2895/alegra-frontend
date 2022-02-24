import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import BoxSearch from "@/components/home/search-section/layer-z2/BoxSearch.vue";

const store = createStore({
  state() {
    return {};
  },
  actions: {
    getImagesGoogle() {},
  },
});

describe("BoxSearch.vue", () => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("The input has a properties for text input", () => {
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
      },
    });
    const $input = wrapper.find("input");
    expect($input.attributes("type")).toBe("text");
    expect($input.attributes("placeholder")).toBe("Search Photo ...");
  });

  it("Conexcion the input with v-model word", async (): Promise<void> => {
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.find('input[type="text"]').setValue("apple");
    expect(wrapper.vm.word).toBe("apple");
  });

  it("Search when press icon search", async (): Promise<void> => {
    const getImagesGoogleSpy = jest.spyOn<any, any>(
      BoxSearch.methods,
      "getImagesGoogle"
    );
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
      },
    });
    const $button = wrapper.find(".search--box__icon");
    await $button.trigger("click");
    expect(getImagesGoogleSpy).toHaveBeenCalled();
  });

  it("Search the word when push the Enter key", async (): Promise<void> => {
    const getImagesGoogleSpy = jest.spyOn<any, any>(
      BoxSearch.methods,
      "getImagesGoogle"
    );
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
      },
    });
    const $input = wrapper.find("input");
    await $input.trigger("keypress", { code: "Enter" });
    expect(getImagesGoogleSpy).toHaveBeenCalled();
  });
});
