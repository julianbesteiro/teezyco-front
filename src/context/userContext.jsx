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
