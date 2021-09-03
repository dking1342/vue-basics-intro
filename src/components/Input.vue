<template>
  <div>
    <label :for="name">{{ label }}</label>
    <br />
    <input
      :type="type"
      :name="name"
      :v-model="value"
      @input="onChange($event.target.value)"
    /><br />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    name: String,
    value: String,
  },
  methods: {
    onChange(input) {
      this.$parent.updateInputField(input, this.name);
    },
  },
};
</script>

<style scoped>
div.label,
input {
  width: 100%;
}
</style>
