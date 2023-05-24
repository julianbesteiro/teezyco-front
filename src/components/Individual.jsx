import { useParams } from "react-router";
import "../css/Individual.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

let Individual = () => {
  const { idProduct } = useParams();

  const { id } = useContext(UserContext);

  const [product, setProduct] = useState("");

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/" + idProduct)
      .then((product) => {
        setProduct(product.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCarritoIndividual = (e, productId) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/cart/add/${id}/${productId}`, {
        quantity,
      })
      .then(() => {
        console.log("agregado al carrito");
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="indCont">
      <div className="imgCont">
        <img
          className="individual"
          src={
            product.image
              ? product.image
              : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
          }
          alt=""
        />
      </div>
      <form
        action="get"
        className="indForm"
        onSubmit={(e) => {
          handleCarritoIndividual(e, product.id);
        }}
      >
        <h2>{product.title}</h2>
        <h3>precio: ${product.price}</h3>
        <p>6 cuotas sin interes de ${Math.ceil(product.price / 6)}</p>
        <p>{product.description}</p>
        <div className="selectCont">
          <p>color: </p>
          <p value="">{product.color}</p>
          <p>talle: </p>
          <p value="">{product.size}</p>
        </div>
        <p>cantidad: </p>
        <input
          type="number"
          max={product.stock}
          min="1"
          defaultValue={1}
          value={quantity}
          onChange={handleChange}
        />
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
