<template>
  <h1>{{ animal.name }} ({{ this.$route.params.type }})</h1>
  <p>{{ animal.age }} years old</p>
  <p>Breed: {{ animal.breed }}</p>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Pet",
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    ...mapState(["cats", "dogs"]),
  },
  mounted() {
    const animal = this[this.$route.params.type][this.$route.params.id];
    this.animal = animal;
  },
};
</script>

<style lang="sass" scoped></style>
