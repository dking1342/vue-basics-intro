<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Modal />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal,
  },
};
</script>
