<template>
  <div class="home">
    <h3>
      Adopt a new friend... {{ animalsCount }} animals remaining |
      {{ getAllCats.length }} cats | {{ getAllDogs.length }} dogs
    </h3>
    <button @click="togglePetForm">Add Pet</button>
    <Form class="form" :fields="fields" :add="add" v-show="petForm" />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import fields from "../data/form";
import add from "../data/addPet";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Form,
  },
  data() {
    return {
      petForm: false,
      fields,
      add,
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats", "getAllDogs"]),
  },
  methods: {
    togglePetForm() {
      this.petForm = !this.petForm;
    },
  },
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 50px 50px 1fr;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 15px;
  justify-content: center;
  width: 100%;
}
h3 {
  margin: 1.5rem 0;
  grid-column: 1/-1;
  text-align: center;
  grid-row: 1/2;
}
button {
  grid-column: 3/5;
  grid-row: 2/3;
  margin: 15px 0;
  width: 100%;
  height: 50px;
  text-align: center;
  word-wrap: normal;
  background: linear-gradient(45deg, lightblue 25%, rgb(26, 150, 252) 99%);
  outline: none;
  border: 0.1px solid rgb(26, 150, 252);
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease all;
}
button:hover {
  filter: brightness(110%);
}
.form {
  grid-row: 3/-1;
  grid-column: 2/6;
  justify-self: center;
  width: 100%;
}
</style>
