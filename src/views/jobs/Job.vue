<template>
  <h1>Jobs Available</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs" @click="showJob(job.id)">
    Job Title: {{ job.title }}
    <span :class="['difficulty', job.difficulty]"></span>
    <router-link class="route" :to="{ name: 'Job', params: { id: job.id } }">{{
      job.title
    }}</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../../router";

export default {
  name: "Job",
  methods: {
    showJob(id) {
      router.push(`/jobs/${id}`);
    },
  },
  computed: {
    ...mapState(["jobs"]),
  },
};
</script>

<style>
.jobs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  gap: 10px;
  cursor: pointer;
}
.difficulty {
  border-radius: 50%;
  height: 7px;
  width: 7px;
}
.route {
  height: 15px;
  font-size: 12px;
  outline: none;
  border: none;
}
.low {
  background: #00ff00;
}
.medium {
  background: #ffff00;
}
.high {
  background: #ff0000;
}
</style>
