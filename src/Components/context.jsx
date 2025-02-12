"use client";
const { createContext, useContext, useState } = require("react");

export const context_all = createContext();

export default function Contaxt_api({ children }) {
  const [data_user, set_data_user] = useState({}); // accont
  const [users, set_users] = useState([]); // accotn
  const [list_product_car, set_list_product_car] = useState([]); // cart home
  const [pathname_menu, set_pathname_menu] = useState("accont"); // accont
  const [step_cart, set_step_cart] = useState(1); // cart

  return (
    <>
      <context_all.Provider
        value={{
          data_user,
          set_data_user,
          users,
          set_users,
          pathname_menu,
          set_pathname_menu,
          list_product_car,
          set_list_product_car,
          step_cart,
          set_step_cart,
        }}
      >
        {children}
      </context_all.Provider>
    </>
  );
}
