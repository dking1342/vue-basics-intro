<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
// import { onMounted } from "@vue/runtime-core";
import Post from "./Post.vue";

export default {
  name: "PostList",
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
  // setup(props) {
  //   onMounted(() => {
  //     console.log("mounted", props);
  //   });
  // },
};
</script>

<style scoped></style>
