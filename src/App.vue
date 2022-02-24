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
import { postBillAlegra } from "@/services/alegra-service";
import swal from "sweetalert";

// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";
import { SellRegisterShort } from "@/types/sell-register";
import { AlegraBill } from "@/types/alegra-bill";
import { AlegraResponseBill } from "@/types/alegra-responses";

// Components
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import FooterComponent from "@/components/shared/FooterComponent.vue";

@Options({
  watch: {
    getScores(currentScore: SellRegisterShort[]) {
      let areThereWinner = currentScore.some((sellShort) => {
        return sellShort.points > this.getObjetivePoints;
      });

      if (areThereWinner) {
        let winner = currentScore.find((sellShort) => {
          return sellShort.points > this.getObjetivePoints;
        });
        // Show modal
        swal({
          title: "Congratulation :",
          text: `Winner => ${winner?.name} \n You can see your Invoice in the console :).`,
          icon: "success",
        });
        console.log("Winner -> ", winner);

        // Create invoice
        this.createFormatBill(winner);
      }
    },
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: mapActions(["getImagesGoogle", "getAlegraSellers", "fillProducts"]),
  computed: mapGetters(["getScores", "getObjetivePoints"]),
})
export default class App extends Vue {
  getImagesGoogle!: () => Promise<GoogleImage[]>;
  getAlegraSellers!: () => Promise<AlegraSeller[]>;
  fillProducts!: () => Promise<void>;
  getScores!: SellRegisterShort[];

  formatDate(): string {
    const today = new Date(Date.now());
    const formatDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    return formatDate;
  }

  async createFormatBill(winner: SellRegisterShort): Promise<void> {
    const arrayItems = this.getScores.map((score: SellRegisterShort) => {
      const newItem = {
        id: score.id - 7,
        quantity: score.points,
        price: 1,
      };
      return newItem;
    });

    const newBill: AlegraBill = {
      date: `${this.formatDate()}`,
      dueDate: `${this.formatDate()}`,
      client: 2,
      operationType: "INTERNAL_SALE",
      items: arrayItems,
      seller: {
        id: `${winner.id}`,
      },
    };
    const response: AlegraResponseBill = await postBillAlegra(newBill);
    console.log("Invoice created: => ", response);
  }

  mounted(): void {
    this.getImagesGoogle();
    this.getAlegraSellers();
    // This function is only used one time to fill the products in alegra
    // this.fillProducts();
  }
}
</script>
