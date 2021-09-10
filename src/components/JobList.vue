<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <ul>
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          molestias atque dolores non, totam minus reiciendis iusto dicta
          voluptates nam, dolorum ipsam natus veritatis, accusamus pariatur
          nobis quam velit sapiente!
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Job, SearchTerm } from "@/types/Job";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "JobList",
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<SearchTerm>,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) =>
        a[props.order] > b[props.order] ? 1 : -1
      );
    });

    return {
      orderedJobs,
    };
  },
});
</script>

<style lang="scss" scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
  p {
    text-align: center;
  }

  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    background: #fff;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
}
.salary {
  display: flex;
  img {
    width: 30px;
  }
  p {
    color: #17bf66;
    font-weight: bold;
  }
}
</style>
