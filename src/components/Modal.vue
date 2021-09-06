<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <p>{{ header }}</p>
      <p>{{ text }}</p> -->
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
        <slot name="btns"></slot>
      </div>
      <!-- <div v-for="user in users" :key="user">
        <p>{{ user }}</p>
      </div> -->
      <!-- <button @click="showModal === true ? toggleModal : toggleModalTwo">Close Modal</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    users: Array,
    theme: String,
    showModal: Boolean,
    toggleModal: Function,
    toggleModalTwo: Function,
    showModalTwo: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.sale {
  background: crimson;
  color: #fff;
}
.modal.sale h1 {
  color: #fff;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale .actions {
  color: #fff;
}
.modal.sale .actions a {
  color: #fff;
}
</style>
