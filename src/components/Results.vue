<template>
  <p>Reaction time: {{ score }}ms</p>
  <p>Your response was {{ userOutput }}</p>
</template>

<script>
export default {
  name: "Results",
  props: {
    score: Number,
  },
  data() {
    return {
      userOutput: "",
    };
  },
  mounted() {
    if (this.score <= 300) {
      this.userOutput = "very fast";
    } else if (this.score > 300 && this.score <= 800) {
      this.userOutput = "fast";
    } else if (this.score > 800 && this.score <= 1200) {
      this.userOutput = "okay";
    } else {
      this.userOutput = "slow";
    }
  },
};
</script>

<style scoped></style>
