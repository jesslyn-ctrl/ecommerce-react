import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="container mx-auto border rounded-md shadow-md px-5 py-5 md:w-1/2">
      <div>
        <p className="mb-4 text-4xl font-bold text-blue-700 hover:text-blue-600">
          Create an Account
        </p>
      </div>

      <form className="mt-8 flex flex-col">
        <div className="flex flex-wrap mb-3">
          <div className="flex flex-col w-1/2 pr-2">
            <label htmlFor="first-name">First Name</label>
            <input
              className="mt-1 border px-4 py-2"
              type="text"
              placeholder="Your First Name"
            />
          </div>
          <div className="flex flex-col w-1/2 pl-2">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="mt-1 border px-4 py-2"
              type="text"
              placeholder="Your Last Name"
            />
          </div>
        </div>

        <label className="mt-3" htmlFor="username">
          Username
        </label>
        <input
          className="mt-3 border px-4 py-2"
          type="text"
          placeholder="Your username"
        />

        <label className="mt-3" htmlFor="email">
          Email Address
        </label>
        <input
          className="mt-3 border px-4 py-2"
          type="email"
          placeholder="example@mail.com"
        />

        <label className="mt-5" htmlFor="password">
          Password
        </label>
        <input
          className="mt-3 border px-4 py-2"
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />

        <label className="mt-5" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          className="mt-3 border px-4 py-2"
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />
      </form>

      <div className="mt-4 flex justify-between">
        <form className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="checkbox">
            I have read and agree with{" "}
            <Link to="" className="text-blue-500 hover:text-blue-600">
              terms &amp; conditions
            </Link>
          </label>
        </form>
      </div>

      <button className="my-5 w-full rounded-md shadow-md font-semibold bg-blue-500 py-2 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
        Register
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-600">
          Login now
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
