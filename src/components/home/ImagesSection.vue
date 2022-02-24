<template>
  <section class="images">
    <loader-line v-if="loadLine"></loader-line>
    <div class="images-container">
      <photo
        v-for="(seller, index) in getSellers"
        :key="index"
        :seller="seller"
        :image="getImages[index]"
      ></photo>
    </div>
  </section>
</template>
<script lang="ts">
// Libraries
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";
// Components
import Photo from "@/components/home/images-section/Photo.vue";
import LoaderLine from "@/components/home/images-section/LoaderLIne.vue";

@Options({
  components: { Photo, LoaderLine },
  watch: {
    getLoading(loading: boolean): void {
      if (loading) {
        this.loadLine = true;
      } else {
        this.loadLine = false;
      }
    },
  },
  computed: mapGetters(["getImages", "getSellers", "getLoading"]),
})
export default class ImagesSection extends Vue {
  getImages!: GoogleImage[];
  getSellers!: AlegraSeller[];
  loadLine = true;
}
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
