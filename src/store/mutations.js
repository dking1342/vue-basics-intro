export default {
  appendPet: (state, { type, pet }) => {
    state[type] = [...state[type], pet];
  },
};
