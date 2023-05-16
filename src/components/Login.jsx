import "../css/login.css";

const Login = () => (
  <div className="formContainer">
    <form className="form">
      <div class="mb-3">
        <label for="email" class="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          class="form-control bg-transparent text-white"
          id="email"
          placeholder="Ingrese su correo electrónico"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Contraseña
        </label>
        <input
          type="password"
          class="form-control bg-transparent text-white"
          id="password"
          placeholder="Ingrese su contraseña"
        />
      </div>
      <button type="submit" class="btn text-white">
        Iniciar sesión
      </button>
    </form>
  </div>
);

export default Login;
