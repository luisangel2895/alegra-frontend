import { createStore } from "vuex";
import { getGoogleImages } from "@/services/google-service";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async getapi() {
      const googleImages = await getGoogleImages("apple");
      console.log(googleImages);
    },
  },
  modules: {},
});
