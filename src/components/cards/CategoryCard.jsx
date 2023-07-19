import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "./../../utils";

const CategoryCard = ({ categoryName }) => {
  return (
    <Link to="">
      <div className="relative cursor-pointer hover:text-blue-500">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/372/952/non_2x/modern-blue-background-with-geometric-squares-free-vector.jpg"
          className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
        />
        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl font-semibold hover:text-black hover:duration-300">
          {capitalizeFirstLetter(categoryName)}
        </p>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryCard;
