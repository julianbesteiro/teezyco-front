import { useState } from "react";
import logo from "../utils/logo.png";
import "../css/Nav.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [logged, setLogged] = useState(false);

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
          {logged ? (
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
          {logged ? (
            <>
              <button className="btn text-white nav-link-hover">
                Cerrar sesion
              </button>
              <button className="btn text-white border nav-link-hover">
                Valentin
              </button>
            </>
          ) : (
            <>
              <button className="btn text-white nav-link-hover">
                Iniciar sesión
              </button>
              <button className="btn text-white border nav-link-hover">
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
