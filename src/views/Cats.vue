<template>
  <Table :header="header" :items="cats" />
</template>

<script>
import { mapState } from "vuex";
import Table from "@/components/Table.vue";

export default {
  name: "Cats",
  components: {
    Table,
  },
  data() {
    return {
      header: "Cats for adoption",
    };
  },
  computed: {
    ...mapState(["cats"]),
  },
};
</script>

<style scoped></style>
