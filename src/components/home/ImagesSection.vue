<template>
  <section class="images">
    <loader-line></loader-line>
    <div class="images-container">
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
      <photo></photo>
    </div>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Photo from "@/components/home/images-section/Photo.vue";
import LoaderLine from "@/components/home/images-section/LoaderLIne.vue";

@Options({
  components: { Photo, LoaderLine },
})
export default class ImagesSection extends Vue {}
</script>

<style scoped>
.images-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;

  background-color: var(--background-color);
}
</style>
