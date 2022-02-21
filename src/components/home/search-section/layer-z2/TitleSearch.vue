<template>
  <p class="search--title">Images of the World</p>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class TitleSearch extends Vue {}
</script>

<style scoped>
.search--title {
  font-family: var(--font-title);
  font-size: 3.6rem;

  color: white;
}

@media (min-width: 768px) {
  .search--title {
    font-size: 7.8rem;
  }
}
</style>
