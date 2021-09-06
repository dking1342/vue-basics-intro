<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <teleport to=".modals" v-if="showModal">
      <Modal
        :users="users"
        theme="sale"
        :showModal="showModal"
        :toggleModal="toggleModal"
        @close="toggleModal"
      >
        <template v-slot:links>
          <router-link to="/about">about</router-link>
        </template>
        <h1>Ninja giveaway</h1>
        <p>Grab your swag for half price</p>
      </Modal>
    </teleport>
    <teleport to=".modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <template v-slot:btns>
          <router-link to="/about">About</router-link>
        </template>
        <h1>Reminder</h1>
        <p>get your vaccination</p>
      </Modal>
    </teleport>
    <button @click="toggleModal">Open Modal</button>
    <button @click="toggleModalTwo">Open Modal 2</button>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal,
  },
  data() {
    return {
      users: ["joe", "jack", "jill", "jon"],
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>
