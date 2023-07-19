import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesData } from "./../../redux/slices/categorySlice";
import CategoryCard from "./../cards/CategoryCard";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const status = useSelector((state) => state.category.status);
  const error = useSelector((state) => state.category.error);

  useEffect(() => {
    dispatch(getCategoriesData());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-auto gap-2 grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-2 lg:gap-5">
      {categories.length > 0 &&
        categories.map((category) => (
          <CategoryCard key={category} categoryName={category} />
        ))}
    </div>
  );
};

export default CategoryList;
