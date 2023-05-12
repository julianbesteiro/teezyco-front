import { useState } from "react";
import "../css/Nav.css";
import logo from "../utils/logo.png";
function NavigationBar() {
  let [logged, setLogged] = useState(false);
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top navbar-dark"
      id="nav"
    >
      <a class="navbar-brand" href="#">
        <img src={logo} alt="" width="60px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white nav-link-hover" href="#">
              Categorias
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white nav-link-hover" href="#">
              Ofertas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white nav-link-hover" href="#">
              Trending
            </a>
          </li>
          {logged ? (
            <li class="nav-item">
              <a class="nav-link text-white nav-link-hover" href="#">
                carrito
              </a>
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div class="ml-auto">
          {logged ? (
            <>
              <button class="btn text-white nav-link-hover ">
                Cerrar sesion
              </button>
              <button class="btn text-white border 2px nav-link-hover">
                Valentin
              </button>
            </>
          ) : (
            <>
              <button class="btn text-white nav-link-hover">
                Iniciar sesión
              </button>
              <button class="btn text-white border 2px nav-link-hover">
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
