import { BreadCrumbs, RegisterForm } from "./../../components";

const Register = () => {
  return (
    <section className="mx-auto mt-24 md:mt-36 mb-10 max-w-[1200px] px-5">
      <BreadCrumbs currentPath="Register" />
      <RegisterForm />
    </section>
  );
};

export default Register;
