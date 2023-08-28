import axios from "axios";

export const newbaseUrl = "https://andrewromany.pythonanywhere.com";
export const newFeatchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {},
  });
  return data;
};
