"use client";
const { createContext, useContext, useState } = require("react");

export const context_all = createContext();

export default function Contaxt_api({ children }) {
  const [data_user, set_data_user] = useState({});
  const [users, set_users] = useState([]);
  const [pathname_menu, set_pathname_menu] = useState("accont");

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
        }}
      >
        {children}
      </context_all.Provider>
    </>
  );
}
