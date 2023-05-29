import axios from "axios";
export const getAnime = async (name) => {
  try {
    const response = await axios(
      `${import.meta.env.VITE_BASEURL}/luckyanime/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      }
    );
    const { data } = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailsAnime = async (animeId, animeName) => {
  try {
    const response = await axios(
      `${
        import.meta.env.VITE_BASEURL
      }/luckyanime/details/anime/${animeId}/${animeName}`,
      {
        method: "GET",
      }
    );
    const { data } = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWatchingAnime = async (animeId, animeName, epsId) => {
  try {
    const response = await axios(
      `${
        import.meta.env.VITE_BASEURL
      }/luckyanime/watch/anime/${animeId}/${animeName}/episode/${epsId}`,
      {
        method: "GET",
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchAnime = async (animeName, orderBy) => {
  try {
    const response = await axios(
      `${import.meta.env.VITE_BASEURL}/luckyanime/search`,
      {
        method: "GET",
        params: {
          keywq: animeName,
          order_by: orderBy,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
