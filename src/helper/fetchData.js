async function fetchData(url, method, body = null) {
  try {
    let resObj = {
      method,
      headers: {
        "Content-type": "application/json",
      },
    };
    let resObjDelete = {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: null,
    };
    let resObjOther = {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    // GET
    if (method === "GET") {
      let response = await fetch(url, resObj);
      let data = await response.json();

      if (data) {
        return {
          data,
          error: null,
          loading: false,
        };
      } else {
        return {
          data: [],
          error: "Error when fetching data",
          loading: false,
        };
      }
    }

    // DELETE
    if (method === "DELETE") {
      let response = await fetch(url, resObjDelete);
      if (response.status === 200) {
        return {
          data: [],
          error: null,
          loading: false,
        };
      } else {
        return {
          data: [],
          error: "Error when fetching",
          loading: false,
        };
      }
    }

    if (method === "UPDATE") {
      let toggleRes = await fetch(url);
      let toggleData = await toggleRes.json();
      let updatedAnimal = { ...toggleData, hasWings: !toggleData.hasWings };

      let response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedAnimal),
      });
      let data = await response.json();
      return {
        data,
        error: null,
        loading: false,
      };
    }

    if (method === "POST") {
      let response = await fetch(url, resObjOther);
      let data = await response.json();

      return {
        data,
        error: null,
        loading: false,
      };
    }
  } catch (err) {
    return {
      data: [],
      error: err.message,
      loading: false,
    };
  }
}

export default fetchData;
