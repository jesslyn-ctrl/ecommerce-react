const OrderSummaryCard = () => {
  return (
    <div className="border py-5 px-4 shadow-md">
      <p className="font-bold uppercase mb-4">Order Summary</p>

      <div className="flex justify-between border-b py-5">
        <p>Subtotal</p>
        <p>$20</p>
      </div>

      <div className="flex justify-between border-b-2 py-5">
        <p>Shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between py-5 font-bold text-blue-600">
        <p>Total</p>
        <p>$20</p>
      </div>

      <button className="block w-full bg-blue-500 px-5 py-2 font-semibold text-white rounded-md shadow-md transition duration-200 ease-in-out hover:bg-blue-600">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummaryCard;
