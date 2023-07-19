import {
  HeroBanner,
  CampaignBanner,
  CategoryList,
  ProductList,
  ScrollTopButton,
} from "../components";

const Home = () => {
  return (
    <div className="mt-16 lg:mt-28">
      {/* Section 1 - Hero */}
      <section>
        <HeroBanner />
      </section>

      {/* Section 2 - Categories */}
      <section>
        <h2 className="mx-auto mt-10 mb-5 max-w-[1200px] px-5 uppercase font-semibold text-xl relative">
          <span className="before-line absolute left-0 top-0 h-full w-1 bg-blue-200 border-none rounded-sm drop-shadow-md opacity-30 mx-5"></span>
          <span className="mx-5 hover:text-slate-600">Categories</span>
        </h2>
        <CategoryList />
      </section>

      {/* Section 3 - Campaign */}
      <section>
        <h2 className="mx-auto mt-10 mb-5 max-w-[1200px] px-5 uppercase font-semibold text-xl relative">
          <span className="before-line absolute left-0 top-0 h-full w-1 bg-blue-200 border-none rounded-sm drop-shadow-md opacity-30 mx-5"></span>
          <span className="mx-5 hover:text-slate-600">Special Offer</span>
        </h2>
        <CampaignBanner />
      </section>

      {/* Section 4 - Product Recommendation */}
      <section>
        <h2 className="mx-auto mt-10 mb-5 max-w-[1200px] px-5 uppercase font-semibold text-xl relative">
          <span className="before-line absolute left-0 top-0 h-full w-1 bg-blue-200 border-none rounded-sm drop-shadow-md opacity-30 mx-5"></span>
          <span className="mx-5 hover:text-slate-600">Recommended for you</span>
        </h2>
      </section>
      <ProductList productType="recommended" />
      <ScrollTopButton />
    </div>
  );
};

export default Home;
