import "../css/Individual.css";

let Individual = () => {
  return (
    <div className="indCont">
      <div className="imgCont">
        <img
          className="individual"
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
          alt=""
        />
      </div>
      <form action="get" className="indForm">
        <h2>remera aestethic</h2>
        <h3>precio: $3000</h3>
        <p>6 cuotas sin interes de $500</p>
        <p>ver mas detalles</p>
        <div className="selectCont">
          <p>color: </p>
          <select id="colorSelect">
            <option value="">Beige</option>
            <option value="">Rojo</option>
            <option value="">Negro</option>
          </select>
          <p>talle: </p>
          <select id="talleSelect">
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
          </select>
        </div>
        <p>cantidad: </p>
        <input type="number" max={10} />
        <button>agregar al carrito</button>
        <h3>Cambio y/o devoluciones: </h3>
        <p>En nuestro Menú encontraras nuestra politica de cambio</p>
        <h3>Medios de pago:</h3>
        <p>Hasta 6 cuotas sin interes con todas las tarjetas</p>
      </form>
    </div>
  );
};
export default Individual;
