import "../css/footer.css";

const Footer = () => (
  <footer
    className="footer 
   text-light"
  >
    <div className="row">
      <div className="col">
        <h3>Email</h3>
        <p>info@TeeZyCo.com</p>
      </div>
      <div className="col">
        <p>Dirección </p>
        <p>Crrientes 1122, CABA</p>
      </div>
      <div className=" col text-center">
        <h3>Teléfono</h3>
        <p> +54 234 567 890</p>
      </div>
    </div>
    <p className="">
      © 2023 TeeZyCo. Todos los derechos reservados.
    </p>
  </footer>
);
export default Footer;
