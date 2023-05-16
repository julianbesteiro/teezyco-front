import "../css/login.css";

const Login = () => (
  <div className="formContainer">
    <form className="form">
      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control bg-transparent text-white"
          id="email"
          placeholder="Ingrese su correo electrónico"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
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

export default Login;
