import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          className="w-full object-cover brightness-50 filter lg:h-[500px] transition-all duration-300 transform hover:scale-105"
          src="https://static.vecteezy.com/system/resources/previews/006/123/307/original/round-podium-pedestal-or-platform-background-for-the-presentation-of-cosmetic-products-place-for-ads-empty-food-stand-background-in-pastel-colors-vector.jpg"
          alt="hero-img"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
        <h1 className="text-2xl mb-2 font-bold md:text-5xl lg:text-left">
          Explore the Best Local Products Across the World 🌍
        </h1>
        <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum
          ducimus pariatur eaque labore.
        </p>
        <Link
          to=""
          className="mx-auto m-5 w-1/3 items-center p-2 bg-sky-500/75 font-bold hover:bg-blue-500 border rounded-md duration-100 lg:mx-0 lg:h-11 lg:w-1/6 flex justify-center cursor-pointer"
        >
          Purchase Now
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
