import { useParams } from "react-router";
import "../css/Individual.css";
import axios from "axios";
import { useEffect, useState } from "react";

let Individual = () => {
  const { id } = useParams();

  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/" + id)
      .then((product) => {
        setProduct(product.data);
        console.log("El producto es ", product.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="indCont">
      <div className="imgCont">
        <img
          className="individual"
          src={
            false
              ? product.image
              : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
          }
          alt=""
        />
      </div>
      <form action="get" className="indForm">
        <h2>{product.title}</h2>
        <h3>precio: ${product.price}</h3>
        <p>6 cuotas sin interes de ${Math.ceil(product.price / 6)}</p>
        <p>ver mas detalles</p>
        <div className="selectCont">
          <p>color: </p>
          <select id="colorSelect">
            <option value="">{product.color}</option>
          </select>
          <p>talle: </p>
          <select id="talleSelect">
            <option value="">{product.size}</option>
          </select>
        </div>
        <p>cantidad: </p>
        <input type="number" max={product.stock} />
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
