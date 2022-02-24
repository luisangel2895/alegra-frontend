import { createStore } from "vuex";
import { getGoogleImages } from "@/services/google-service";
import { getSellersAlegra } from "@/services/alegra-service";
import VuexPersistence from "vuex-persist";

// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";
import { SellRegister } from "@/types/sell-register";
import { ImageSelled } from "@/types/sell-register";
import { Image } from "@/types/sell-register";
import { SellRegisterShort } from "@/types/sell-register";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    // Global variables
    points_per_sell: 7 as number,
    points_objective: 20 as number,
    // Vuex variables
    images: [] as GoogleImage[],
    isLoading: true,
    sellers: [] as AlegraSeller[],
    sellRegisters: [] as SellRegister[],
    winnerSeller: {} as SellRegister,
  },
  getters: {
    getImages: (state) => state.images,
    getLoading: (state) => state.isLoading,
    getSellers: (state) => state.sellers,
    getScores: (state) => {
      return state.sellRegisters.map((register) => {
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
    getObjetivePoints: (state) => state.points_objective,
  },
  mutations: {
    UPDATE_GOOGLE_IMAGES(state, payload: GoogleImage[]) {
      state.images = payload;
    },

    UPDATE_LOADING_STATUS(state, payload: boolean) {
      state.isLoading = payload;
    },

    GET_ALEGRA_SELLERS(state, payload: AlegraSeller[]) {
      state.sellers = payload;
    },

    UPDATE_LIST_SELL_REGISTER(state, payload: ImageSelled) {
      const existSeller: boolean = state.sellRegisters.some(
        (register: SellRegister) => {
          return register.id === payload.id;
        }
      );

      if (existSeller) {
        const register: SellRegister | undefined = state.sellRegisters.find(
          (register: SellRegister) => {
            return register.id === payload.id;
          }
        );

        const products: Image[] | undefined = register?.products;

        const existImage: boolean | undefined = register?.products.some(
          (image: Image) => {
            return image.key === payload.key;
          }
        );

        if (existImage) {
          // eslint-disable-next-line
          register!.products = register!.products.filter((image: Image) => {
            return image.key !== payload.key;
          });
          // eslint-disable-next-line
          register!.points = register!.points - state.points_per_sell;
        } else {
          // add image
          const image: Image = {
            key: payload.key,
            url: payload.url,
            title: payload.title,
          };
          products?.push(image);
          // eslint-disable-next-line
          register!.points = register!.points + state.points_per_sell;
        }
      } else {
        // create a seller
        const image: Image = {
          key: payload.key,
          url: payload.url,
          title: payload.title,
        };
        const newSeller: SellRegister = {
          id: 0,
          name: "",
          points: 0,
          products: [],
        };
        newSeller.id = payload.id;
        newSeller.name = payload.name;
        newSeller.points = state.points_per_sell;
        newSeller.products.push(image);
        state.sellRegisters.push(newSeller);
      }
      console.log("All Movements -> ", state.sellRegisters);
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
  modules: {},
  plugins: [vuexLocal.plugin],
});
