import jwt_decode from "jwt-decode";

const decodeToken = (token) => {
  try {
    const decodedToken = jwt_decode(token);
    return decodedToken;
  } catch (error) {
    console.log(error);
  }
};

export default decodeToken;
