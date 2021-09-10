<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <p>Name: {{ firstName }}</p>
    <p>Age: {{ ages }}</p>
    <button @click="changeName('zelda')">Change Name</button>
    <button @click="changeAge(30)">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    // reactive
    const state = reactive({
      firstName: "Link",
      ages: 25 as string | number,
    });

    state.firstName = "David"; // must be the same type
    state.ages = 40; // must be the same type

    // refs
    const lastName = ref("Hubert");
    const number = ref<number | string>(25);

    return {
      ...toRefs(state),
      lastName,
      number,
    };
  },
  data() {
    return {
      name: "Link",
      age: 25 as string | number,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: string | number) {
      this.age = age;
    },
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
