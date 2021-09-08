<template>
  <main>
    <header>
      <h1>Composition</h1>
    </header>
    <section>
      <h2>Refs</h2>
      <p>name: {{ name }} age: {{ age }} score: {{ score }}</p>
      <div class="btn-container">
        <button @click="handleClick">click me</button>
        <button @click="score++">Add</button>
        <button @click="score--">Minus</button>
      </div>
    </section>
    <section>
      <h2>Refs</h2>
      <p>my friend is {{ firstName }} {{ lastName }}</p>
      <input type="text" name="lastName" v-model="lastName" />
      <button @click="handleClick2">change name</button>
    </section>
    <section>
      <h2>Refs</h2>
      <p>Reactive example 1: {{ ninjaOne.name }} {{ ninjaOne.age }}</p>
      <button @click="updateNinjaOne">Ref change</button>
    </section>
    <section>
      <h2>Reactive</h2>
      <p>Reactive example 1: {{ ninjaTwo.name }} {{ ninjaTwo.age }}</p>
      <button @click="updateNinjaTwo">Change me</button>
    </section>
    <section>
      <h2>Computed</h2>
      <p>username: {{ username }}</p>
    </section>
    <section>
      <h2>Refs loop and Watch Watch Effect</h2>
      <input type="text" name="search" v-model="search" />
      <p>Search term: {{ search }}</p>
      <div v-for="name in matchingName" :key="name">{{ name }}</div>
      <button @click="handleWatch">Stop Watches</button>
    </section>
  </main>
</template>

<script>
import { ref, reactive, computed } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "Blog",
  setup() {
    // regular variable that are not reactive
    let name = "mario";
    let age = 30;

    // refs
    const para = ref(null);
    const firstName = ref("Jack");
    const lastName = ref("Splat");
    const score = ref(0);
    const ninjaOne = ref({ name: "mario", age: 30 });
    const names = ref(["mario", "luigi", "yoshi", "toad", "bowser"]);
    const search = ref("");

    // watch
    // runs after first time
    const stopWatch = watch(search, () => {
      console.log("watch function ", search.value);
    });

    // runs the first time then any other time
    const stopEffect = watchEffect(() => {
      console.log("watch effect function", search.value);
    });

    // reactive
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    // computed
    const username = computed(() => {
      return "Kavooce";
    });
    const matchingName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    // function with refs
    const handleClick = () => {
      console.log("you clicked me", para, para.value);
      para.value.classList.add("test");
      para.value.textContent = "hello my friend";
    };

    // function with refs
    const handleClick2 = () => {
      firstName.value = "George";
      lastName.value = "Murisen";
    };

    // function with refs
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    // function with reactive
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    // function with watch
    const handleWatch = () => {
      stopEffect();
      stopWatch();
    };

    // notes
    // primitive values cannot be updated with reactive
    // refs are better when using primitive types
    // return values to be used in the template
    // returned values should be at the end to avoid conflict

    return {
      name,
      age,
      handleClick,
      handleClick2,
      para,
      firstName,
      lastName,
      score,
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
      username,
      names,
      search,
      matchingName,
      handleWatch,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.test {
  background: #ff0000;
  color: #fff;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
header,
section {
  width: 90%;
  background: #eee;
  padding: 10px;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button {
  padding: 10px 20px;
  margin: 15px 10px;
  background: steelblue;
  color: #fff;
  outline: none;
  border: 0.5px solid slategrey;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease all;
}
button:hover {
  filter: brightness(70%);
}
</style>
