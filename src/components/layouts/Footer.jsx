import Logo from "../../assets/images/logo.png";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        {/* Desktop Footer */}
        <div className="mx-auto hidden w-full max-w-[1200px] justify-between border-t pb-10 lg:flex">
          <div className="ml-5">
            <img
              className="mt-10 mb-5 h-[100px] w-[150px]"
              src={Logo}
              alt="company-logo"
            />
            <p className="pl-0">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit.
            </p>
            <div className="mt-10 flex gap-3">
              <a href="https://github.com/jesslyn-ctrl">
                <img
                  className="h-6 w-6 cursor-pointer"
                  src={githubIcon}
                  alt="github-icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/jesslyn-jesslyn-5798711a7/">
                <img
                  className="h-6 w-6 cursor-pointer"
                  src={linkedinIcon}
                  alt="linkedin-icon"
                />
              </a>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mx-5 mt-10">
              <p className="font-medium text-gray-500">FEATURES</p>
              <ul className="text-sm text-blue-500 leading-8">
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Marketing</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Commerce</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Merchandise</a>
                </li>
              </ul>
            </div>

            <div className="mx-5 mt-10">
              <p className="font-medium text-gray-500">SUPPORT</p>
              <ul className="text-sm text-blue-500 leading-8">
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Pricing</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Docs</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Merchendise</a>
                </li>
              </ul>
            </div>

            <div className="mx-5 mt-10">
              <p className="font-medium text-gray-500">DOCUMENTS</p>
              <ul className="text-sm text-blue-500 leading-8">
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Terms</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Conditions</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Privacy</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">License</a>
                </li>
              </ul>
            </div>

            <div className="mx-5 mt-10">
              <p className="font-medium text-gray-500">DELIVERY</p>
              <ul className="text-sm text-blue-500 leading-8">
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Restrictions</a>
                </li>
                <li className="hover:text-blue-400 hover:font-medium">
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="mx-auto flex w-full max-w-[1200px] justify-center text-center bg-slate-200 pb-10 md:hidden">
          <div>
            <img
              className="mt-10 h-[130px] w-[180px]"
              src={Logo}
              alt="company-logo"
            />

            <div>
              <div className="mx-5 mt-10">
                <p className="font-medium text-gray-500">FEATURES</p>
                <ul className="text-sm text-blue-500 leading-8">
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Marketing</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Commerce</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Merchandise</a>
                  </li>
                </ul>
              </div>

              <div className="mx-5 mt-10">
                <p className="font-medium text-gray-500">SUPPORT</p>
                <ul className="text-sm text-blue-500 leading-8">
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Docs</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Merchendise</a>
                  </li>
                </ul>
              </div>

              <div className="mx-5 mt-10">
                <p className="font-medium text-gray-500">DOCUMENTS</p>
                <ul className="text-sm text-blue-500 leading-8">
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Terms</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Conditions</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Privacy</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">License</a>
                  </li>
                </ul>
              </div>

              <div className="mx-5 mt-10">
                <p className="font-medium text-gray-500">DELIVERY</p>
                <ul className="text-sm text-blue-500 leading-8">
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Restrictions</a>
                  </li>
                  <li className="hover:text-blue-400 hover:font-medium">
                    <a href="#">Payments</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-11 bg-blue-200">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 pt-2">
          <p className="text-black font-semibold">&copy; Jesslyn, 2023</p>
          <div className="flex items-center space-x-3">
            <img
              className="h-6"
              src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1286-s6y46dfh.png"
              alt="Visa icon"
            />
            <img
              className="h-6"
              src="https://i0.wp.com/bursadesain.com/wp-content/uploads/2016/08/LOGO-BCA-BIRU.jpg?fit=2926%2C1208&ssl=1"
              alt="BCA-icon"
            />
            <img
              className="h-8"
              src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png"
              alt="Apple pay icon"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
