<template>
  <div class="loader-line"></div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class LoaderLine extends Vue {}
</script>

<style scoped>
.loader-line {
  width: 100%;
  height: 5px;
  animation: loading 3s;
}
@keyframes loading {
  0% {
    width: 0%;
    background-color: var(--loader-color);
  }
  25% {
    width: 25%;
  }
  50% {
    width: 75%;
  }
  90% {
    width: 100%;
    background-color: var(--loader-color);
  }
  100% {
    width: 100%;
    background-color: rgb(0, 0, 0, 0);
  }
}
</style>
