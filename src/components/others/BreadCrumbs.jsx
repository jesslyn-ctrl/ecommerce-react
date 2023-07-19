import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ currentPath }) => {
  return (
    <div className="mx-auto mt-4 mb-6 max-w-[1200px] px-5">
      <ul className="flex items-center">
        <li className="cursor-pointer">
          <Link to="/">
            <img
              className="w-[22px] h-[22px] shadow-sm"
              src="https://static.vecteezy.com/system/resources/previews/010/158/131/original/house-symbol-home-icon-sign-design-free-png.png"
            />
          </Link>
        </li>
        <li>
          <span className="mx-2 text-gray-500">&gt;</span>
        </li>
        <li className="text-gray-500">{currentPath}</li>
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = {
  currentPath: PropTypes.string,
};

export default Breadcrumbs;
