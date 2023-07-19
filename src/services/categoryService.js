import axios from "../hooks/useAxios";

const getCategories = async () => {
  const response = await axios("GET", "/products/categories");
  return response;
};

export { getCategories };
