<template>
  <header-component></header-component>
  <main>
    <router-view />
  </main>
  <footer-component></footer-component>
</template>

<script lang="ts">
// Libraries
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";
import { SellRegisterShort } from "@/types/sell-register";

// Components
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import FooterComponent from "@/components/shared/FooterComponent.vue";

@Options({
  watch: {
    getScores(currentScore: SellRegisterShort[]) {
      console.log("Scores -> ", currentScore);

      let areThereWinner = currentScore.some((sellShort) => {
        return sellShort.points > this.getObjetivePoints;
      });

      if (areThereWinner) {
        let winner = currentScore.find((sellShort) => {
          return sellShort.points > this.getObjetivePoints;
        });
        console.log("Winner -> ", winner);
      }
    },
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: mapActions(["getImagesGoogle", "getAlegraSellers"]),
  computed: mapGetters(["getScores", "getObjetivePoints"]),
})
export default class App extends Vue {
  getImagesGoogle!: () => Promise<GoogleImage[]>;
  getAlegraSellers!: () => Promise<AlegraSeller[]>;

  mounted(): void {
    this.getImagesGoogle();
    this.getAlegraSellers();
    window.localStorage.clear();
  }
}
</script>
