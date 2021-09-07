<template>
  <div class="container">
    <div class="message-box" v-if="loading">Loading...</div>
    <div class="message-box" v-else-if="!loading && error">{{ error }}</div>
    <div class="message-box" v-else>
      <button class="formBtn" @click="showAdd = !showAdd">
        {{ showAdd ? "X" : "+" }}
      </button>
      <AddAnimal @add-animal="addAnimal" v-show="showAdd" />
      <AnimalList
        :animals="animals"
        @toggle-animal="updateAnimal"
        @remove-animal="removeAnimal"
      />
    </div>
  </div>
</template>

<script>
import fetchData from "../../helper/fetchData";
import AnimalList from "../../components/AnimalList.vue";
import AddAnimal from "../../components/AddAnimal.vue";

export default {
  name: "Animals",
  components: {
    AnimalList,
    AddAnimal,
  },
  data() {
    return {
      animals: [],
      loading: true,
      error: null,
      showAdd: false,
    };
  },
  methods: {
    async removeAnimal(id) {
      if (confirm("Are you sure?")) {
        let { error, loading } = await fetchData(
          `http://localhost:5000/animals/${id}`,
          "DELETE",
          id
        );
        this.animals = this.animals.filter((animal) => animal.id !== id);
        this.error = error;
        this.loading = loading;
      }
    },
    async updateAnimal(id) {
      let { data, error, loading } = await fetchData(
        `http://localhost:5000/animals/${id}`,
        "UPDATE"
      );
      let updatedList = this.animals.map((animal) => {
        if (animal.id === id) {
          return data;
        }
        return animal;
      });
      this.animals = updatedList;
      this.error = error;
      this.loading = loading;
    },
    async addAnimal(animal) {
      let { error, loading } = await fetchData(
        "http://localhost:5000/animals",
        "POST",
        animal
      );
      this.animals = [...this.animals, animal];
      this.error = error;
      this.loading = loading;
    },
  },
  async created() {
    let { data, error, loading } = await fetchData(
      "http://localhost:5000/animals",
      "GET"
    );
    this.animals = data;
    this.error = error;
    this.loading = loading;
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.message-box {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formBtn {
  position: absolute;
  top: 120px;
  right: 20vw;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 25px;
  text-align: center;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0.75);
  color: #eee;
  cursor: pointer;
  transition: 0.3s ease all;
}
.formBtn:hover {
  filter: brightness(55%);
}
</style>
