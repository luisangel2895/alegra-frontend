<template>
  <img src="@/assets/imgs/photographer.png" alt="" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class ImageSearch extends Vue {}
</script>

<style scoped>
img {
  padding-left: 40px;
  height: 80%;
  display: none;
}

@media (min-width: 1300px) {
  img {
    display: block;
  }
}
</style>
