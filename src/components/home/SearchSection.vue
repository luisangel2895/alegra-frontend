<template>
  <section class="search">
    <div class="search-layer-z1">
      <image-search></image-search>
    </div>
    <div class="search-layer-z2">
      <div class="search-layer-z2-container">
        <title-search></title-search>
        <box-search></box-search>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ImageSearch from "@/components/home/search-section/layer-z1/ImageSearch.vue";
import TitleSearch from "@/components/home/search-section/layer-z2/TitleSearch.vue";
import BoxSearch from "@/components/home/search-section/layer-z2/BoxSearch.vue";

@Options({
  components: { ImageSearch, TitleSearch, BoxSearch },
})
export default class SearchSection extends Vue {}
</script>

<style scoped>
.search {
  width: 100%;
  height: 300px;
  padding: 0px;
}

.search-layer-z1,
.search-layer-z2 {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 300px;

  display: flex;
}

.search-layer-z1 {
  z-index: 1;

  align-items: flex-end;
  background-color: var(--background-image);
}

.search-layer-z2 {
  z-index: 2;

  align-items: center;
  justify-content: center;
}

.search-layer-z2-container {
  color: white;
}
</style>
