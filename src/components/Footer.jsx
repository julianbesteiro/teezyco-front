import "../css/footer.css";

const Footer = () => (
  <footer
    className="footer 
   text-light"
  >
    <div className="row">
      <div className="col">
        <h3>Contacto</h3>
        <p>Correo electrónico: info@example.com</p>
      </div>
      <div className="col">
        <p>Teléfono: +1 234 567 890</p>
        <p>Dirección: 123 Calle Principal, Ciudad</p>
      </div>
      <div className=" col text-center">
        <h3>Teléfono</h3>
        <p>Teléfono: +1 234 567 890</p>
      </div>
    </div>
    <p className="">
      © 2023 Nombre de la empresa. Todos los derechos reservados.
    </p>
  </footer>
);
export default Footer;
