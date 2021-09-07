<template>
  <h1>Animals</h1>
  <div class="animal-container">
    <div v-for="animal in animals" :key="animal.id">
      <Animal
        :animal="animal"
        @remove-animal="$emit('remove-animal', animal.id)"
        @toggle-animal="$emit('toggle-animal', animal.id)"
      />
    </div>
  </div>
</template>

<script>
import Animal from "../components/Animal.vue";

export default {
  name: "AnimalList",
  components: {
    Animal,
  },
  props: {
    animals: Array,
  },
  emits: ["remove-animal", "toggle-animal"],
};
</script>

<style scoped>
.animal-container {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 50vh;
  overflow: auto;
}
</style>
