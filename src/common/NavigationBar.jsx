import { useState } from "react";
import logo from "../utils/logo.png";
import "../css/Nav.css";

function NavigationBar() {
  const [logged, setLogged] = useState(true);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top navbar-dark"
      id="nav"
    >
      <a className="navbar-brand" href="#">
        <img src={logo} alt="" width="60px" />
      </a>
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
            <a className="nav-link text-white nav-link-hover" href="#">
              Trending
            </a>
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
              <a className=" text-white nav-link-hover">Iniciar sesión</a>
              <a className=" text-white border-1 nav-link-hover">Registrarse</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
