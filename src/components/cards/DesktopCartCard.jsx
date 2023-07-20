const DesktopCartCard = () => {
  return (
    <tr className="h-[100px] border-b">
      {/* Image & Title Column */}
      <td className="align-middle">
        <div className="flex">
          <img
            className="w-[80px] h-[85px]"
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt="product-image"
          />
          <div className="ml-3 flex flex-col justify-center">
            <p className="text-md text-sky-600 font-semibold p-6">
              Product Title Here...
            </p>
          </div>
        </div>
      </td>

      {/* Price Column */}
      <td className="mx-auto text-center">$20</td>

      {/* Quantity Column */}
      <td className="align-middle">
        <div className="flex items-center justify-center">
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
            -
          </button>
          <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
            1
          </div>
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
            +
          </button>
        </div>
      </td>

      {/* Subtotal Column */}
      <td className="mx-auto text-center font-semibold">$20</td>

      {/* Remove button column */}
      <td className="align-middle">
        <img
          src="/images/trash.svg"
          className="w-5 h-5 cursor-pointer transform transition duration-200 hover:scale-110"
          alt="remove-item"
        />
      </td>
    </tr>
  );
};

export default DesktopCartCard;
