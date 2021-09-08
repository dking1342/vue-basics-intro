<template>
  <div v-if="loading">loading...</div>
  <div v-else-if="error && !loading">{{ error }}</div>
  <div v-else>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getPost from "../compose/getPost";

export default {
  name: "PostDetails",
  props: {
    id: String,
  },
  setup(props) {
    let id = ref(Number(props.id));
    let post = ref({});
    let error = ref(null);
    let loading = ref(false);

    let {
      loading: load,
      errors,
      result,
      fetchData,
    } = getPost(post, error, loading, id.value);
    fetchData();
    post = result;
    error = errors;
    loading = load;

    return {
      post,
      error,
      loading,
    };
  },
};
</script>

<style scoped></style>
