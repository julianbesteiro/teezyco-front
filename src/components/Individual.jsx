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
        alert("Producto agregado al carrito");
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  function capitalizeFirstLetterOfEachWord(str) {
    if (str)
      return str
        .split(" ") // Split the string into an array of words
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize the first letter and make the remaining letters lowercase for each word
        .join(" ");
    // Join the words back into a string
    else {
      return;
    }
  }

  const handleFavorito = (productId) => {
    console.log("fr", productId);
    axios
      .post(`http://localhost:3001/api/favorite/add/${id}/${productId}`)
      .then((favoritos) => {
        alert("Producto agregado a favoritos");
      })
      .catch((err) => console.error(err));
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
        <h2>{capitalizeFirstLetterOfEachWord(product.title)}</h2>
        <h3
          className="favs"
          onClick={() => {
            handleFavorito(product.id);
          }}
        >
          ♡{" "}
        </h3>
        <h3>precio: ${product.price}</h3>
        <p>6 cuotas sin interes de ${Math.ceil(product.price / 6)}</p>
        <p>{product.description}</p>
        <div className="selectCont">
          <p>color: {product.color}</p>
          <p>talle: {product.size}</p>
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
        <button className="btncarrito">agregar al carrito</button>
        <h3>Cambio y/o devoluciones: </h3>
        <p>En nuestro Menú encontraras nuestra politica de cambio</p>
        <h3>Medios de pago:</h3>
        <p>Hasta 6 cuotas sin interes con todas las tarjetas</p>
      </form>
    </div>
  );
};
export default Individual;
