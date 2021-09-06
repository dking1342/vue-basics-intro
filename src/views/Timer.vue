<template>
  <h1>Ninja reaction time</h1>
  <button :disabled="isPlaying" @click="start">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";

export default {
  name: "Timer",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(time) {
      this.score = Number(time);
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style scoped></style>
