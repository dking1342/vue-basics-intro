<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import JobList from "./components/JobList.vue";
import { defineComponent, ref } from "vue";
import { Job, SearchTerm } from "./types/Job";

export default defineComponent({
  name: "App",
  components: {
    JobList,
  },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "farmworker",
        location: "lon lon ranch",
        salary: 30000,
        id: "1",
      },
      {
        title: "quarryman",
        location: "death valley",
        salary: 50000,
        id: "2",
      },
      {
        title: "flute player",
        location: "the lost woods",
        salary: 35000,
        id: "3",
      },
      {
        title: "fisherman",
        location: "lake hylia",
        salary: 21000,
        id: "4",
      },
      {
        title: "prison guard",
        location: "gerudo valley",
        salary: 32000,
        id: "5",
      },
    ]);
    const order = ref<SearchTerm>("title");
    const handleClick = (term: SearchTerm) => {
      order.value = term;
    };
    return {
      jobs,
      handleClick,
      order,
    };
  },
  methods: {},
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f4f4f4;
}
header {
  text-align: center;

  .order {
    margin-top: 20px;

    button {
      margin: 0 10px;
      color: #1105c9;
      border: 3px solid #1105c0;
      background-color: #d3f0ff;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
