export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length;
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => pet.type === "cats");
  },
  getAllDogs: (state) => {
    return state.pets.filter((pet) => pet.type === "dogs");
  },
};
