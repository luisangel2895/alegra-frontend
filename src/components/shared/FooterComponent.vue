<template>
  <footer>© Angel Orellana</footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FooterComponent extends Vue {}
</script>

<style>
footer {
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-weight: bold;
  color: white;

  background-color: var(--primary-color);
}
</style>
