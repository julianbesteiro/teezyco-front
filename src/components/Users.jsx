import React, { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [adminUpdate, setAdminUpdate] = useState(false);

  const { id } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/all`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, [adminUpdate]);

  const cambiarStatusAdmin = (userId) => {
    axios
      .put(`http://localhost:3001/api/users/changeadmin/${userId}`)
      .then(() => {
        alert("Admin actualizado");
        setAdminUpdate(!adminUpdate);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios.</p>
      ) : (
        <ul>
          {users
            .filter((user) => user.id !== id)
            .map((user) => (
              <div key={user.id}>
                <h3>{user.email}</h3>

                {user.admin === false ? (
                  <button onClick={() => cambiarStatusAdmin(user.id)}>
                    Convertir en admin
                  </button>
                ) : (
                  <button onClick={() => cambiarStatusAdmin(user.id)}>
                    Remover status admin
                  </button>
                )}
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
