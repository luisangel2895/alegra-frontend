import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import ImagesSection from "@/components/home/ImagesSection.vue";
// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";

const store = createStore({
  state() {
    return {
      images: [] as GoogleImage[],
      isLoading: true,
      sellers: [] as AlegraSeller[],
    };
  },
  getters: {
    getImages: (state) => {
      const googleImage1: GoogleImage = {
        position: 1,
        thumbnail:
          "https://serpapi.com/searches/6215dbbd2c68789dfda5f456/images/05109f1d08e78809ac8ac33e43ac30be36fe799ed67b01bb8b42b1203f73ed6e.png",
        source: "mobile.twitter.com",
        title: "Apple (@Apple) | Twitter",
        link: "https://mobile.twitter.com/apple",
        original:
          "https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ.jpg",
        is_product: false,
      };
      const googleImage2: GoogleImage = {
        position: 2,
        thumbnail:
          "https://serpapi.com/searches/6215dbbd2c68789dfda5f456/images/05109f1d08e7880997a7d55a45910361fe68c6ecad37992ee517563067e91c80.png",
        source: "apple.com",
        title: "iPhone - Apple (ID)",
        link: "https://www.apple.com/id/iphone/",
        original:
          "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202202032151",
        is_product: false,
      };
      (state as any).images.push(googleImage1);
      (state as any).images.push(googleImage2);
      return (state as any).images;
    },
    getSellers: (state) => {
      const alegraSeller1 = {
        id: 8,
        name: "Saul Serrano",
        identification: "89ea9a867a1b071928566e4990ebe503",
        observations: "Good Seller",
        status: "active",
      };
      const alegraSeller2 = {
        id: 9,
        name: "Felisa Olmos",
        identification: "fdbb171d70cf3c80fe03d6158e2d8a0f",
        observations:
          'Felisa Olmos es un/una gran vendedor/a de nuestra empresa "Imagenes del Mundo".',
        status: "active",
      };
      (state as any).sellers.push(alegraSeller1);
      (state as any).sellers.push(alegraSeller2);
      return (state as any).sellers;
    },

    getLoading: (state) => (state as any).isLoading,
  },
});

describe("ImagesSection.vue", () => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(ImagesSection, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Photo and LoadLine are mounted in ImageSection", () => {
    const wrapper = shallowMount(ImagesSection, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find("photo-stub").exists()).toBeTruthy();
    expect(wrapper.find("loader-line-stub").exists()).toBeTruthy();
  });
  it("Correct properties sent to Photo", () => {
    const wrapper = shallowMount(ImagesSection, {
      global: {
        plugins: [store],
      },
    });
    const $photo = wrapper.find("photo-stub");
    expect($photo.attributes("seller")).toBe("[object Object]");
    expect($photo.attributes("image")).toBe("[object Object]");
  });
});
