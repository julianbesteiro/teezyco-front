import { useState } from "react";
import logo from "../assets/logo.png";
import "../css/Nav.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";

function NavigationBar() {
  const { logOut } = useContext(UserContext);
  let name = "valen";
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

  const handleSearch = (e) => {
    if (e.target.value) navigate(`search/${e.target.value}`);
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
            <Link
              className="nav-link text-white nav-link-hover"
              to="/categories"
            >
              Categorias
            </Link>
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
              <Link className="nav-link text-white nav-link-hover" to="cart">
                carrito
              </Link>
            </li>
          ) : null}
        </ul>

        <input
          className="form-control rounded-pill border-white border-1 bg-transparent text-white ml-auto mr-auto"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
          id="search"
          onChange={(e) => {
            handleSearch(e);
          }}
        />

        <div className="ml-auto mt-auto">
          {name ? (
            <>
              <div className="btn text-white  nav-link-hover">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="userMenu"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {name}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userMenu"
                >
                  <Link to="/user/products" class="dropdown-item" href="#">
                    Productos
                  </Link>
                  <Link to="/products/add" class="dropdown-item" href="#">
                    Agregar Productos
                  </Link>
                  <Link to="/users/all" class="dropdown-item" href="#">
                    usuarios
                  </Link>
                  <Link to="/user" class="dropdown-item" href="#">
                    perfil
                  </Link>
                  <Link to="/user/favs" class="dropdown-item" href="#">
                    favoritos
                  </Link>
                  <button onClick={handleLogout} class="dropdown-item">
                    cerrar sesion
                  </button>
                </div>
              </div>
              <Link to="/cart" className="text-white no-hover">
                🛒
              </Link>
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
