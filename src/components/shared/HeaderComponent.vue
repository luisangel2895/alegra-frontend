<template>
  <header>
    <nav :class="{ 'white-nav': scrollPosition }">
      <p><span class="link-nav" @click="goHome">Home</span></p>
      <p><span class="link-nav" @click="goPersonalPage">About Me</span></p>
      <p>
        <span class="link-nav" @click="goPhotographers">Photographers</span>
      </p>
    </nav>
  </header>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class HeaderComponent extends Vue {
  scrollPosition = 0;

  updateScroll(): void {
    this.scrollPosition = window.scrollY;
  }

  goHome(): void {
    this.$router.push("/");
  }

  goPersonalPage(): void {
    window.location.href = "https://luisangel2895.github.io/";
  }

  goPhotographers(): void {
    this.$router.push("/photographers");
  }

  mounted(): void {
    window.addEventListener("scroll", this.updateScroll);
  }
}
</script>

<style scoped>
.white-nav {
  background-color: var(--primary-color);
  animation: change 0.5s;
}

@keyframes change {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

nav {
  position: fixed;
  z-index: 3;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
}

nav > p {
  margin: 30px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

.link-nav {
  display: block;
  color: white;
  text-decoration: none;
  position: relative;
  cursor: pointer;
}

.link-nav::after {
  content: "";
  background: white;
  mix-blend-mode: exclusion;
  width: calc(100% + 20px);
  height: 0;
  position: absolute;
  bottom: -4px;
  left: -10px;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.link-nav:hover::after {
  height: calc(100% + 8px);
}

@media (min-width: 1300px) {
  nav {
    justify-content: end;
  }
  nav > p {
    margin: 30px 40px;
  }
}
</style>
