import axios from "../hooks/useAxios";

const getRecommendedProducts = async () => {
  const response = await axios("GET", "/products?limit=8");
  return response;
};

const getAllProducts = async () => {
  const response = await axios("GET", "/products");
  return response;
};

const getProductDetail = async (id) => {
  const response = await axios("GET", `/products/${id}`);
  return response;
};

export { getRecommendedProducts, getAllProducts, getProductDetail };
