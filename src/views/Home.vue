<template>
  <search-section></search-section>
  <images-section></images-section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import SearchSection from "@/components/home/SearchSection.vue";
import ImagesSection from "@/components/home/ImagesSection.vue";

@Options({
  components: { SearchSection, ImagesSection },
})
export default class Home extends Vue {}
</script>

<style>
.search--background img {
  width: 100%;
  filter: brightness(0.6);
}
.search--cover {
  position: absolute;
  width: 100%;
  height: auto;

  background-color: rgba(0, 0, 0, 0.5);
  height: 200px;
  top: 0px;
}
</style>
