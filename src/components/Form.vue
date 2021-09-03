<template>
  <form @submit.prevent="onSubmit" id="form">
    <Input
      v-for="field in fields"
      :key="field.id"
      :label="`${field.label}`"
      :type="`${field.type}`"
      :name="`${field.name}`"
      :value="this.vals[field.name]"
    />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import Input from "./Input.vue";

export default {
  name: "Form",
  components: {
    Input,
  },
  props: {
    fields: Array,
    add: Object,
  },
  data() {
    return {
      vals: this.add,
    };
  },
  methods: {
    ...mapActions(["addPet"]),
    updateInputField(data, field) {
      this.vals[field] = data;
    },
    onSubmit() {
      const payload = {
        type: this.vals.type,
        pet: { ...this.vals, id: Math.floor(Math.random() * 100000) },
      };
      this.addPet(payload);
      document.getElementById("form").reset();
    },
  },
};
</script>

<style scoped>
form {
  max-width: 350px;
  height: 350px;
  overflow: auto;
  padding: 15px 35px;
  display: flex;
  flex-direction: column;
  border: 0.25px solid #888;
  border-radius: 3px;
  background: lightblue;
  justify-content: flex-start;
  gap: 20px;
}
</style>
