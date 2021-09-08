const getPosts = (result = [], errors = null, loading = false) => {
  const fetchData = async () => {
    try {
      loading.value = true;
      const response = await fetch("http://localhost:5000/posts");
      if (response.status === 200) {
        const data = await response.json();
        result.value = data;
      } else {
        throw Error("Error when fetching posts");
      }
      loading.value = false;
    } catch (err) {
      errors.value = err.message;
      loading.value = false;
    }
  };

  return {
    loading,
    errors,
    result,
    fetchData,
  };
};

export default getPosts;
