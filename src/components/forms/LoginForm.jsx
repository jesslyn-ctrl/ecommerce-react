import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLoginToken, getUserDetail } from "./../../redux/slices/authSlice";
import { ErrorPopup } from "./../../components";
import { decodeToken } from "./../../utils";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(getLoginToken(formData));
      if (result.payload) {
        Cookies.set("accessToken", result.payload.token);

        const decodedToken = decodeToken(result.payload.token);
        if (decodedToken && decodedToken.sub) {
          const userData = await dispatch(getUserDetail(decodedToken.sub));
          if (userData.payload) {
            Cookies.set("user", JSON.stringify(userData.payload));
          } else {
            setError(userData.error?.message);
          }
        }
        navigate("/");
      } else {
        setError(result.error?.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <div className="container mx-auto border rounded-md px-5 py-5 shadow-md md:w-1/2">
      <div className="text-4xl font-bold text-blue-700 hover:text-blue-600">
        Login
      </div>

      <form className="mt-8 flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="mb-3 mt-3 border px-4 py-2"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Your username"
        />

        <label htmlFor="password">Password</label>
        <input
          className="mt-3 border px-4 py-2"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />

        {error && <ErrorPopup message={error} onClose={closeErrorPopup} />}
      </form>

      <div className="mt-4 flex justify-between">
        <form className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </form>
        <Link to="" className="text-blue-500 hover:text-blue-600">
          Forgot password
        </Link>
      </div>

      <button
        className="my-5 w-full rounded-md shadow-md font-semibold bg-blue-500 py-2 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>

      <p className="text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:text-blue-600">
          Register now
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
