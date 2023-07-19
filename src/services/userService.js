import axios from "../hooks/useAxios";

const getUserDetail = async (id) => {
  const response = await axios("GET", `/users/${id}`);
  return response;
};

export { getUserDetail };
