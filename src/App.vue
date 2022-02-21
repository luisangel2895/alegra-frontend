<template>
  <header-component></header-component>
  <main @scroll="downNav">
    <router-view />
  </main>
  <footer-component></footer-component>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import FooterComponent from "@/components/shared/FooterComponent.vue";

@Options({
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: mapActions(["getapi"]),
})
export default class App extends Vue {
  getapi!: any;

  mounted(): void {
    this.getapi();
  }
}
</script>
