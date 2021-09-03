<template>
  <main>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link>
    </nav>
    <section id="container">
      <router-view />
    </section>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 35px 1fr 35px;
  background: linear-gradient(45deg, #bbb 5%, #eee 50%, #ddd 90%);
}

#nav {
  height: 100%;
  padding: 15px 30px;
  grid-column: 1/-1;
  grid-row: 1/2;
}
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
#container {
  width: 100%;
  grid-row: 2/-1;
  grid-column: 2/3;
}
</style>
