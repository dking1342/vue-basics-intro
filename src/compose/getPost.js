const getPost = (result = {}, errors = null, loading = false, param) => {
  const fetchData = async () => {
    try {
      loading.value = true;
      const response = await fetch(`http://localhost:5000/posts/${param}`);
      if (response.status === 200) {
        const data = await response.json();
        result.value = data;
      } else {
        throw Error("Error when fetching post");
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

export default getPost;
