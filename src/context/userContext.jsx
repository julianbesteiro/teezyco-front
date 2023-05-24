import { useState, createContext } from "react";
import { isRouteErrorResponse } from "react-router";

const userContextDefaultValues = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  admin: false,

  logUser: () => null,
  logOut: () => null,
};

export const UserContext = createContext(userContextDefaultValues);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    admin: false,
    isAutenticated: false,
  });

  const logUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      admin: user.admin,

      isAutenticated: true,
    });
  };

  const logOut = () => {
    setUser({
      id: "",
      name: "",
      lastname: "",
      email: "",
      isAutenticated: false,
      admin: false,
    });
  };

  return (
    <UserContext.Provider
      value={{
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        isAutenticated: user.isAutenticated,
        admin: user.admin,

        logUser,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

// import React, { createContext, useState } from "react";

// export const LoggedContext = createContext(false);

// export const LoggedProvider = ({ children }) => {
//   const [logged, setLogged] = useState(false);

//   return (
//     <LoggedContext.Provider value={[logged, setLogged]}>
//       {children}
//     </LoggedContext.Provider>
//   );
// };
