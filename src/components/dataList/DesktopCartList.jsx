import DesktopCartCard from "./../cards/DesktopCartCard";

const DesktopCartList = () => {
  return (
    <div className="overflow-y-auto h-[620px]">
      <table className="table-fixed">
        <thead className="sticky top-0 h-16 bg-neutral-100">
          <tr>
            <th className="px-6 py-2">ITEM</th>
            <th className="px-6 py-2">PRICE</th>
            <th className="px-6 py-2">QUANTITY</th>
            <th className="px-6 py-2">TOTAL</th>
            <th className="px-6 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <DesktopCartCard />
        </tbody>
      </table>
    </div>
  );
};

export default DesktopCartList;
