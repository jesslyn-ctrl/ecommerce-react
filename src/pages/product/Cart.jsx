import {
  BreadCrumbs,
  DesktopCartList,
  OrderSummaryCard,
} from "./../../components";

const Cart = () => {
  return (
    <section className="mt-24 md:mt-36">
      <BreadCrumbs currentPath="Cart" />
      <div className="container mx-auto min-h-screen max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        {/* Desktop Cart */}
        <div className="hidden w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid">
          <div id="cart-container">
            <DesktopCartList />
          </div>
        </div>

        {/* Order Summary */}
        <div className="mx-auto w-full px-4 md:max-w-[750px] lg:max-w-[400px]">
          <OrderSummaryCard />
        </div>
      </div>
    </section>
  );
};

export default Cart;
