import axios from "../hooks/useAxios";
import moment from "moment";

const getUserCart = async (userId) => {
  const response = await axios("GET", `/carts/user/${userId}`);
  return response;
};

const addUserCartItem = async (params) => {
  const data = {
    userId: params.userId,
    date: moment().format("YYYY-MM-DD"),
    products: params.products,
  };
  const response = await axios("POST", "/carts", data);
  return response;
};

const updateUserCartItem = async (id, params) => {
  const data = {
    userId: params.userId,
    date: moment().format("YYYY-MM-DD"),
    products: params.products,
  };
  const response = await axios("PATCH", `/carts/${id}`, data);
  return response;
};

export { getUserCart, addUserCartItem, updateUserCartItem };
