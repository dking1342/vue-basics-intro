<template>
  <div class="post">
    <router-link :to="{ name: 'Blo', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ showMore ? snippet : body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span><br />
    <button @click="handleShowMore">
      {{ showMore ? "show more" : "show less" }}
    </button>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  name: "Post",
  props: {
    post: Object,
  },
  setup(props) {
    const body = ref(props.post.body);
    const showMore = ref(true);

    const snippet = computed(() => {
      return `${props.post.body.slice(0, 50)}...`;
    });

    const handleShowMore = () => {
      showMore.value = !showMore.value;
    };

    return {
      snippet,
      body,
      showMore,
      handleShowMore,
    };
  },
};
</script>

<style scoped></style>
