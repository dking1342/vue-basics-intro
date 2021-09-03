<template>
  <h1>{{ header }}</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Breed</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Color</th>
        <th>Weight</th>
        <th>Location</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name" @click="viewPet(item)">
        <td>{{ item.name }}</td>
        <td>{{ item.breed }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.color }}</td>
        <td>{{ item.weight }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.notes }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import router from "../router/index";

export default {
  name: "Table",
  props: {
    header: String,
    items: Array,
  },
  methods: {
    viewPet(item) {
      router.push(`/pets/${item.type}/${item.id}`);
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 1.5rem 0;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: 350px;
  overflow: auto;
}

tr:first-child,
th {
  height: 50px;
  text-align: center;
  border: 1px solid #dddddd;
  padding: 8px;
}

td {
  height: 60px;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
tr:hover {
  background: #f4f4f4;
  cursor: pointer;
}
</style>
