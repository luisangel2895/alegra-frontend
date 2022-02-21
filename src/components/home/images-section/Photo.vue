<template>
  <div class="container-image">
    <img v-if="!imageLoaded" src="@/assets/default/default.jpg" alt="" />
    <img
      src="https://picsum.photos/300/300"
      alt=""
      class="image-search"
      :class="{ loadingImage: imageLoaded }"
      @load="loadImage"
      @click="selectImage"
    />
    <div
      class="container-author"
      :class="{ loadingAuthor: authorLoaded }"
      v-if="authorLoaded"
    >
      <span class="author-name">Angel Orellana</span>
    </div>
    <div class="container-buy" v-if="imageLoaded">
      <img
        v-if="!imageSelected"
        src="@/assets/icons/heart-void.svg"
        alt=""
        class="heart-void"
        @click="selectImage"
      />
      <img
        v-else
        src="@/assets/icons/heart-fill.svg"
        alt=""
        class="heart-fill"
        @click="selectImage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Photo extends Vue {
  imageLoaded = false;
  authorLoaded = false;

  imageSelected = false;

  loadImage(): void {
    this.imageLoaded = true;
    this.authorLoaded = true;
  }
  selectImage(): void {
    this.imageSelected = !this.imageSelected;
  }
}
</script>

<style scoped>
.container-image {
  display: block;
  padding: 0px;
  height: 320px;
}
.container-image > img {
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 5px;
}
.loadingImage {
  animation: fadein 2s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.container-author {
  position: relative;
  top: -40px;

  z-index: 2;
}
.author-name {
  padding: 5px 10px;
  margin-left: 20px;
  width: 10px;

  font-size: 1.2rem;
  font-weight: 500;

  color: white;
  background-color: rgba(44, 44, 44, 0.7);
}
.loadingAuthor {
  animation: slide 2s;
}
@keyframes slide {
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0px);
  }
}
.container-buy {
  position: relative;
  top: -300px;
  padding-right: 20px;

  text-align: end;

  z-index: 2;
}
.heart-void,
.heart-fill {
  background: radial-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );

  animation: fill-heart 1s;
}
@keyframes fill-heart {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
