import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BreadCrumbs, RatingStars } from "./../../components";
import { getProductDetail } from "./../../redux/slices/productSlice";
import { capitalizeFirstLetter } from "./../../utils";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product.productDetail);

  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="mt-24 md:mt-36">
      {status === "succeeded" && productDetail && (
        <>
          <BreadCrumbs currentPath={productDetail.title} />
          <div className="container mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-6">
            {/* Product Image */}
            <div className="container mx-auto px-4 flex justify-center">
              <img
                className="object-contain h-[400px]"
                src={productDetail.image}
                alt="Sofa image"
              />
            </div>

            {/* Product Detail */}
            <div className="mx-auto px-5 py-2 lg:px-5">
              <h2 className="pt-3 text-2xl font-bold lg:pt-0">
                {productDetail.title}
              </h2>
              <div className="mt-1 mb-4">
                <div className="flex items-center">
                  <RatingStars rating={productDetail.rating} />
                </div>
              </div>

              <p className="mt-5 font-bold mb-2">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
              <p className="font-bold mb-2">
                Category:{" "}
                <span className="font-normal">
                  {capitalizeFirstLetter(productDetail.category)}
                </span>
              </p>

              <p className="mt-4 text-4xl font-bold text-blue-700">
                ${productDetail.price.toString()}
              </p>

              <p className="pt-5 text-sm leading-5 text-gray-500">
                {productDetail.description}
              </p>

              <div className="mt-6">
                <p className="pb-2 text-xs text-gray-500">Quantity</p>

                <div className="flex">
                  <button className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                    &minus;
                  </button>
                  <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                    1
                  </div>
                  <button className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                    &#43;
                  </button>
                </div>
              </div>

              <div className="mt-7 flex flex-row items-center gap-6">
                <button className="flex h-12 w-1/3 items-center justify-center rounded-md shadow-md font-semibold uppercase bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-blue-600">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
