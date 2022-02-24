<template>
  <div class="container-image">
    <img
      src="@/assets/default/default.jpg"
      alt="image-default"
      v-if="getLoading"
    />
    <img
      v-else
      :src="this.image.thumbnail"
      alt="image-search"
      :class="{ loadingImage: image }"
      @click="selectImage"
    />

    <div
      class="container-author"
      :class="{ loadingAuthor: image }"
      v-if="image && !getLoading"
    >
      <span class="author-name">{{ seller.name }}</span>
    </div>
    <div class="container-buy" v-if="image && !getLoading">
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
// Libraries
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

// Types
import { GoogleImage } from "@/types/google-images";
import { AlegraSeller } from "@/types/alegra-seller";
import { ImageSelled } from "@/types/sell-register";

@Options({
  props: {
    image: {} as GoogleImage,
    seller: {} as AlegraSeller,
  },
  watch: {
    getLoading(loading) {
      if (!loading) {
        // reset the heart
        this.imageSelected = false;
      }
    },
  },
  computed: mapGetters(["getLoading"]),
  methods: mapMutations(["UPDATE_LIST_SELL_REGISTER"]),
})
export default class Photo extends Vue {
  image!: GoogleImage;
  seller!: AlegraSeller;

  imageLoaded = false;
  imageSelected = false;

  UPDATE_LIST_SELL_REGISTER!: (payload: ImageSelled) => void;

  selectImage(): void {
    this.imageSelected = !this.imageSelected;

    const imageSelled: ImageSelled = {
      id: 0,
      name: "",
      key: "",
      url: "",
      title: "",
    };

    imageSelled.id = this.seller.id;
    imageSelled.name = this.seller.name;
    imageSelled.key = this.image.original;
    imageSelled.url = this.image.original;
    imageSelled.title = this.image.title;

    this.UPDATE_LIST_SELL_REGISTER(imageSelled);
  }
}
</script>

<style scoped>
.container-image {
  display: block;
  padding: 0px;
  height: 140px;
}
.container-image > img {
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 5px;
  height: 120px;
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
  top: -150px;
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

@media (min-width: 768px) {
  .container-image {
    height: 270px;
  }
  .container-image > img {
    height: 250px;
  }
  .container-buy {
    top: -250px;
  }
}

@media (min-width: 1300px) {
  .container-image {
    height: 320px;
  }
  .container-image > img {
    height: 300px;
  }
  .container-buy {
    top: -300px;
  }
}
</style>
