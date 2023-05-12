import "../css/Nav.css";

function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  navbar-transparent fixed-top">
      <a class="navbar-brand" href="#">
        Logo
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
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Acerca de
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Servicios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
        <div class="ml-auto">
          <button class="btn btn-outline-primary mr-2">Iniciar sesión</button>
          <button class="btn btn-primary">Registrarse</button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
