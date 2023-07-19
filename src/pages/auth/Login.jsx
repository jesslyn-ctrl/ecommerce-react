import { BreadCrumbs, LoginForm } from "./../../components";

const Login = () => {
  return (
    <section className="mx-auto mt-24 md:mt-36 mb-10 max-w-[1200px] px-5">
      <BreadCrumbs currentPath="Login" />
      <LoginForm />
    </section>
  );
};

export default Login;
