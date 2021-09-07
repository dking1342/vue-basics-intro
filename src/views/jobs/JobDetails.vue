<template>
  <div v-if="!loaded">loading...</div>
  <div v-else-if="error && loaded">{{ error }}</div>
  <div v-else>
    <h1>Job {{ id }}</h1>
    <p>{{ job.title }}</p>
    <h3>Job description</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nihil
      voluptates harum, consectetur soluta enim incidunt amet, in earum quis
      voluptatem sit quod accusantium quidem.
    </p>
    <router-link to="/jobs">Back</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Job",
  props: ["id"],
  data() {
    return {
      job: {},
      loaded: false,
      error: null,
    };
  },
  computed: {
    ...mapState(["jobs"]),
  },
  mounted() {
    const id = this.$route.params.id;
    const job = this.jobs.filter((job) => job.id === Number(id))[0];
    if (!job) {
      this.error = "Job not found";
    } else {
      this.job = job;
    }
    this.loaded = true;
  },
};
</script>

<style scoped></style>
