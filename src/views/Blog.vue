<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="loading">loading...</div>
    <div v-else-if="error && !loading">{{ error }}</div>
    <div v-else>
      <PostList :posts="posts" v-if="showPosts" />
      <button @click="showPosts = !showPosts">toggle posts</button>
    </div>
    <!-- <button @click="posts.pop()">delete post</button> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
import getPosts from "../compose/getPosts.js";

export default {
  name: "Blog",
  setup() {
    const showPosts = ref(true);
    let posts = ref([]);
    let error = ref(null);
    let loading = ref(false);

    let {
      loading: load,
      errors,
      result,
      fetchData,
    } = getPosts(loading, error, posts);
    fetchData();

    posts = result;
    error = errors;
    loading = load;

    return {
      posts,
      showPosts,
      error,
      loading,
    };
  },
  components: {
    PostList,
  },
};
</script>

<style scoped></style>
