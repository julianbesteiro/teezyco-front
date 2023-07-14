import "../css/login.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        logUser(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error.");
      });
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control bg-transparent text-white"
            id="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control bg-transparent text-white"
            id="password"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit" className="btn text-white">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;