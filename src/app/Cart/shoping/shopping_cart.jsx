import Cart_summary from "./cart_summary";
import Table_product from "./table_product";

export default function Shopping_cart() {
  return (
    <>
      <div className=" w-[100%] h-[100%] flex gap-[30px] ">
        <div>
          {" "}
          <Table_product></Table_product>
        </div>
        <div>
          {" "}
          <Cart_summary></Cart_summary>
        </div>
      </div>
    </>
  );
}
