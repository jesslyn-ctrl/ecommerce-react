import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecommendedProducts,
  getAllProducts,
} from "./../../redux/slices/productSlice";
import ProductCard from "./../cards/ProductCard";

const ProductList = ({ productType }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    if (productType === "recommended") {
      return state.product.recommendedProducts;
    } else if (productType === "all") {
      return state.product.allProducts;
    }
    return [];
  });

  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (productType === "recommended") {
      dispatch(getRecommendedProducts());
    } else if (productType === "all") {
      dispatch(getAllProducts());
    }
  }, [dispatch, productType]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  productType: PropTypes.oneOf(["recommended", "all"]).isRequired,
};

export default ProductList;
