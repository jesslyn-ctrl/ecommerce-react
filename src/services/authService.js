import axios from "../hooks/useAxios";

const login = async (params) => {
  const data = {
    username: params.username,
    password: params.password,
  };
  const response = await axios("POST", "/auth/login", data);
  return response;
};

export { login };
