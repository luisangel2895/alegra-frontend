<template>
  <div class="search--box">
    <div class="search--box__icon-all">All</div>
    <input type="text" placeholder="Search Photo ..." />
    <div class="search--box__icon">
      <img src="@/assets/icons/search.svg" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class BoxSearch extends Vue {}
</script>

<style scoped>
.search--box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search--box__icon-all {
  display: none;
}

.search--box > input {
  width: 100%;

  padding: 10px;

  font-size: 1.4rem;

  border: 0;
  outline: none;

  border-radius: 10px 0px 0px 10px;
}

.search--box__icon {
  padding: 10px;

  align-self: center;

  background-color: rgb(211, 211, 211);
  border-radius: 0px 10px 10px 0px;
}

.search--box__icon > img {
  width: 20px;
}

.search--box__icon:active {
  background-color: rgb(192, 192, 192);
}

@media (min-width: 1300px) {
  .search--box > input {
    border-radius: 0px;
  }
  .search--box__icon-all {
    display: flex;
    align-items: center;
    padding: 0px 20px;

    font-size: 1.4rem;
    font-weight: bold;

    border-radius: 10px 0px 0px 10px;
    color: rgb(221, 220, 220);
    background-color: rgb(46, 46, 46);
  }
}
</style>
