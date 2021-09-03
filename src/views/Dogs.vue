<template>
  <Table :header="header" :items="dogs" />
</template>

<script>
import { mapState } from "vuex";
import Table from "@/components/Table.vue";

export default {
  name: "Dogs",
  components: {
    Table,
  },
  data() {
    return {
      header: "Dogs for adoption",
    };
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>

<style lang="sass" scoped></style>
