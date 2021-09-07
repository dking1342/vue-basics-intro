<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/timer">Timer</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link :to="{ name: 'Jobs' }">Job</router-link> |
    <router-link :to="{ name: 'Animals' }">Animals</router-link>
  </div>
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>
  <button @click="redirect">Redirect</button>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
