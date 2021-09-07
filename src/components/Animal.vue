<template>
  <div
    class="animal"
    :class="{ selected: animal.hasWings }"
    @dblclick="$emit('toggle-animal', animal.id)"
  >
    <h3>{{ animal.animal }}</h3>
    <h3>Breed: {{ animal.breed }}</h3>
    <button @click="$emit('remove-animal', animal.id)"><i>x</i></button>
  </div>
</template>

<script>
export default {
  name: "Animal",
  props: {
    animal: Object,
  },
};
</script>

<style scoped>
.animal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  border-radius: 7px;
  padding: 12px;
}
.animal h3 {
  margin: 0 10px;
}
.selected {
  border-left: 5px solid green;
  border-right: 5px solid green;
}
button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
}
i {
  pointer-events: none;
}
button:hover {
  background: #ff0000;
  color: #fff;
}
</style>
