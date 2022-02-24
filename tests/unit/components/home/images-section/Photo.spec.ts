import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import Photo from "@/components/home/images-section/Photo.vue";
// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";

const store = createStore({
  state() {
    return { isLoading: true };
  },
  getters: {
    getLoading: (state) => (state as any).isLoading,
  },
  mutations: {
    // this fake function is only nessesary because in the current version setData
    // function is failing in typescript, jest and vue3, in near future will be solved this fix
    UPDATE_LIST_SELL_REGISTER(state) {
      (state as any).isLoading = false;
    },
  },
});

const wrapper = shallowMount(Photo, {
  global: {
    plugins: [store],
  },
  props: {
    image: {
      position: 1,
      thumbnail:
        "https://serpapi.com/searches/62168bbe5c10595dfa382d6a/images/05109f1d08e78809ac8ac33e43ac30be36fe799ed67b01bb8b42b1203f73ed6e.png",
      source: "en.wikipedia.org",
      title: "History of Apple Inc. - Wikipedia",
      link: "https://en.wikipedia.org/wiki/History_of_Apple_Inc.",
      original:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      is_product: false,
    } as GoogleImage,
    seller: {
      id: 11,
      name: "Alexander Benavides",
      identification: "1c25ad194ba17a2bc5c07c62c7d66350",
      observations:
        'Alexander Benavides es un/una gran vendedor/a de nuestra empresa "Imagenes del Mundo".',
      status: "active",
    } as AlegraSeller,
  },
});

describe("Photo.vue", () => {
  it("Match with snapshot", (): void => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Until charge the image only show the default image", (): void => {
    const $imageDefault = wrapper.find("img");
    expect($imageDefault.attributes("alt")).toBe("image-default");
    expect($imageDefault.attributes("src")).toBe(undefined);
  });

  it("Contains (image, author, heart) after loading with their atributes", async (): Promise<void> => {
    await wrapper.vm.UPDATE_LIST_SELL_REGISTER();
    const [$image, $heart] = wrapper.findAll("img");
    const $authorContainer = wrapper.find(".container-author");
    const $author = wrapper.find(".author-name");
    // Main iamge
    expect($image.exists()).toBeTruthy();
    expect($image.attributes("alt")).toBe("image-search");
    expect($image.attributes("class")).toBe("loadingImage");
    expect($image.attributes("src")).toBe(wrapper.vm.image.thumbnail);
    // Heart void
    expect($heart.exists()).toBeTruthy();
    expect($heart.attributes("class")).toBe("heart-void");
    expect($heart.attributes("src")).toBe(undefined);
    // Author Container
    expect($authorContainer.exists()).toBeTruthy();
    expect($authorContainer.attributes("class")).toBe(
      "container-author loadingAuthor"
    );
    // Author
    expect($author.exists()).toBeTruthy();
    expect($author.text()).toBe(wrapper.vm.seller.name);
  });

  it("Fill heart when the image is clicked", async (): Promise<void> => {
    await wrapper.vm.UPDATE_LIST_SELL_REGISTER();

    const $image = wrapper.findAll("img")[0];

    await $image.trigger("click");

    const $heartFilled = wrapper.findAll("img")[1];

    expect($heartFilled.exists()).toBeTruthy();
    expect($heartFilled.attributes("class")).toBe("heart-fill");
  });

  it("Unfill the heart when the image is clicked again", async (): Promise<void> => {
    await wrapper.vm.UPDATE_LIST_SELL_REGISTER();

    const $image = wrapper.findAll("img")[0];

    // Because the mount is global the last click is conserved so its only nessesary 1 more click
    await $image.trigger("click");

    const $heart = wrapper.findAll("img")[1];

    expect($heart.exists()).toBeTruthy();
    expect($heart.attributes("class")).toBe("heart-void");
  });
});
