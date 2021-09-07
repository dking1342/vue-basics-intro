<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="animal">Animal</label>
      <input
        type="text"
        name="animal"
        placeholder="Add Animal"
        v-model="animal"
      />
    </div>
    <div class="form-control">
      <label for="breed">Breed</label>
      <input type="text" name="breed" placeholder="Add Breed" v-model="breed" />
    </div>
    <div class="form-control">
      <label for="wings">Wings?</label>
      <input type="checkbox" name="wings" class="checkbox" v-model="hasWings" />
    </div>
    <div class="form-control">
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddAnimal",
  data() {
    return {
      animal: "",
      breed: "",
      hasWings: false,
    };
  },
  methods: {
    onSubmit() {
      if (!this.animal || !this.breed) {
        alert("Please do not leave any field blank");
      } else {
        const newAnimal = {
          id: Math.floor(Math.random() * 1000000),
          animal: this.animal,
          breed: this.breed,
          hasWings: this.hasWings,
        };
        this.$emit("add-animal", newAnimal);

        this.animal = "";
        this.breed = "";
        this.hasWings = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 25px;
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 7px;
  padding: 30px 15px;
  background: #eee;
  color: #888;
}
.form-control {
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
}
label,
input {
  height: 100%;
}
input {
  flex: 1;
  background: #f4f4f4;
  color: #444;
  border-radius: 5px;
  outline: none;
  border: 1px solid #999;
  padding: 0 5px;
}
input:focus {
  background: #fff;
}
.checkbox {
  flex: 0;
  height: 100%;
}
input[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px 0;
  flex: 1;
  height: fit-content;
  background: steelblue;
  color: #eee;
  cursor: pointer;
  transition: 0.3s all ease;
}
input[type="submit"]:hover {
  filter: brightness(125%);
}
</style>
