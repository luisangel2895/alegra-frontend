<template>
  <div class="container-title">Photographers</div>
  <div class="container-table" v-if="getScores.length">
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(score, index) of getScores" :key="index">
          <td>{{ score.id }}</td>
          <td>{{ score.name }}</td>
          <td>{{ score.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="message-default">
    Sorry we still do not have any photograph sold :(
  </div>
</template>

<script lang="ts">
// Libraries
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
// Types
import { SellRegisterShort } from "@/types/sell-register";

@Options({
  computed: mapGetters(["getScores"]),
})
export default class App extends Vue {
  getScores!: SellRegisterShort[];
}
</script>

<style scoped>
.container-title {
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--background-image);

  font-family: var(--font-title);
  font-size: 3.6rem;

  color: white;
}
.message-default {
  padding: 20px 0px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
}
.container-table {
  padding: 20px 0px;

  overflow-x: auto;

  font-size: 1.4rem;
  background-color: var(--background-color);
}

/* Table */
.styled-table {
  margin: auto;
  min-width: 400px;

  border-collapse: collapse;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
  font-weight: bold;
  color: #009879;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

@media (min-width: 768px) {
  .container-title {
    font-size: 7.8rem;
  }
}
</style>
