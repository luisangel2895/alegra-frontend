import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import App from "@/App.vue";
// Functions
import { getGoogleImages } from "@/services/google-service";
import { getSellersAlegra } from "@/services/alegra-service";
// Types
import { SellRegister, SellRegisterShort } from "@/types/sell-register";
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";

const store = createStore({
  state() {
    return {
      sellRegisters: [] as SellRegister[],
      points_objective: 20 as number,
    };
  },
  getters: {
    getScores: (state) => {
      return (state as any).sellRegisters.map((register: SellRegister) => {
        const tuple: SellRegisterShort = {
          id: 0,
          name: "",
          points: 0,
        };
        tuple.id = register.id;
        tuple.name = register.name;
        tuple.points = register.points;
        return tuple;
      });
    },
    getObjetivePoints: (state) => (state as any).points_objective,
  },
  mutations: {
    UPDATE_GOOGLE_IMAGES(state, payload: GoogleImage[]) {
      (state as any).images = payload;
    },

    UPDATE_LOADING_STATUS(state, payload: boolean) {
      (state as any).isLoading = payload;
    },

    GET_ALEGRA_SELLERS(state, payload: AlegraSeller[]) {
      (state as any).sellers = payload;
    },
  },
  actions: {
    async getImagesGoogle({ commit }, payload: string) {
      commit("UPDATE_LOADING_STATUS", true);
      const googleImages = await getGoogleImages(payload);
      const { images_results } = googleImages;
      commit("UPDATE_GOOGLE_IMAGES", images_results as GoogleImage[]);
      commit("UPDATE_LOADING_STATUS", false);
    },
    async getAlegraSellers({ commit }) {
      const alegraSellers = await getSellersAlegra();
      commit("GET_ALEGRA_SELLERS", alegraSellers);
    },
  },
});

describe("App.vue", () => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ["router-link", "router-view"],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("HeaderComponent and FooterComponent are mounted in App", () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ["router-link", "router-view"],
      },
    });
    expect(wrapper.find("header-component-stub").exists()).toBeTruthy();
    expect(wrapper.find("footer-component-stub").exists()).toBeTruthy();
  });
  it("Called action (getImagesGoogle) in mounted", () => {
    const getImagesGoogleSpy = jest.spyOn<any, any>(
      App.methods,
      "getImagesGoogle"
    );

    shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ["router-link", "router-view"],
      },
    });
    expect(getImagesGoogleSpy).toHaveBeenCalled();
  });
  it("Called action (getAlegraSellers) in mounted", () => {
    const getAlegraSellersSpy = jest.spyOn<any, any>(
      App.methods,
      "getAlegraSellers"
    );

    shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ["router-link", "router-view"],
      },
    });
    expect(getAlegraSellersSpy).toHaveBeenCalled();
  });
});
