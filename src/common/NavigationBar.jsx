import { useState } from "react";
import logo from "../utils/logo.png";
import "../css/Nav.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";

function NavigationBar() {
  const { name, logOut } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/users/logout")
      .then((res) => res.data)
      .then(() => {
        logOut();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top navbar-dark"
      id="nav"
    >
      <Link to="/">
        <img src={logo} alt="" width="60px" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-white nav-link-hover" href="#">
              Categorias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white nav-link-hover" href="#">
              Ofertas
            </a>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white nav-link-hover"
              to="/products/trending"
            >
              Trending
            </Link>
          </li>
          {name ? (
            <li className="nav-item">
              <a className="nav-link text-white nav-link-hover" href="#">
                carrito
              </a>
            </li>
          ) : null}
        </ul>
        <form className="form-inline ml-auto ">
          <input
            className="form-control rounded-pill border-white border-1 bg-transparent text-white mr-auto ml-auto mb-auto "
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
        </form>
        <div className="ml-auto mt-auto">
          {name ? (
            <>
              <button className="btn text-white nav-link-hover">{name}</button>
              <button
                className="btn text-white border nav-link-hover"
                onClick={handleLogout}
              >
                Cerrar sesion
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn text-white nav-link-hover">
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="btn text-white border nav-link-hover"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
