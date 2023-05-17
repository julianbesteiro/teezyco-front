import { useState, createContext } from "react";

const userContextDefaultValues = {
  name: "",
  lastname: "",
  email: "",
  logUser: () => null,
  logOut: () => null,
};

export const UserContext = createContext(userContextDefaultValues);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    isAutenticated: false,
  });

  const logUser = (user) => {
    setUser({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isAutenticated: true,
    });
  };

  const logOut = () => {
    setUser({
      name: "",
      lastname: "",
      email: "",
      isAutenticated: false,
    });
  };

  return (
    <UserContext.Provider
      value={{
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        isAutenticated: user.isAutenticated,
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
