import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RatingStars from "./../others/RatingStars";

const ProductCard = ({ product }) => {
  const { id, title, image, price, rating } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col shadow-md border rounded-md"
    >
      {/* Card Header */}
      <div id="card-header" className="relative flex overflow-hidden">
        <img
          src={image}
          className="mx-auto h-40 w-60 object-cover transform transition duration-300 hover:scale-105"
          alt=""
        />
      </div>

      {/* Card Body */}
      <div id="card-body" className="p-2">
        <h3 className="mt-2 text-md line-clamp-1 overflow-hidden text-overflow-ellipsis whitespace-nowrap break-words">
          {title}
        </h3>
        <p className="font-medium text-blue-500">${price.toString()}</p>
        <RatingStars rating={rating} />
      </div>

      {/* Card Footer */}
      <div
        id="card-footer"
        className="p-3 border border-none bg-blue-400 bg-opacity-10"
      >
        <button className="border-none outline-none rounded-md shadow-md uppercase font-bold text-xs p-3 bg-blue-400 text-white float-right hover:bg-blue-500">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProductCard;
