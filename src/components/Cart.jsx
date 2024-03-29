import React, { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalCompra, setTotalCompra] = useState(0);

  const { id } = useContext(UserContext);

  useEffect(() => {
    if (id)
      axios
        .get(`http://localhost:3001/api/cart/${id}`)
        .then((response) => {
          setCartItems(response.data);
          setTotalCompra(
            cartItems.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0)
          );
        })
        .catch((err) => console.error(err));
  }, [id, quantities, cartItems]);

  useEffect(() => {
    if (!cartItems.length) setTotalCompra(0);
  }, [cartItems]);

  const removeFromCart = (productId) => {
    axios
      .put(`http://localhost:3001/api/cart/delete/${id}/${productId}`)
      .then(() => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
      })
      .catch((err) => console.error(err));
  };

  const addToCart = (itemId, number) => {
    axios
      .post(`http://localhost:3001/api/cart/add/${id}/${itemId}`, {
        quantity: number, // Enviar la cantidad al backend
      })
      .then(() => {
        setQuantities({ ...quantities, [itemId]: number });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    let totalParaUsar = cartItems.reduce((total, item) => {
      const itemQuantity = parseInt(quantities[item.id]) || 1; // Convertir a número entero o usar 1 por defecto
      console.log("item", item);
      console.log("item q", itemQuantity);
      return total + item.price * itemQuantity;
    }, 0);
    setTotalCompra(totalParaUsar);
  }, [quantities]);

  const handleClick = () => {
    axios
      .post(`http://localhost:3001/api/purchases/confirm/${id}`, {
        productsPurchase: cartItems,
      })
      .then((purchase) => {
        alert("Compra completada correctamente");
      })
      .catch((error) => console.log(error));
  };

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the remaining letters lowercase for each word
      .join(" "); // Join the words back into a string
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img
                src={
                  item.image
                    ? item.image
                    : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
                }
                alt=""
              />
              <h3>{capitalizeFirstLetterOfEachWord(item.title)}</h3>
              <p>Price: ${item.price * item.quantity}</p>

              <p>Stock: {item.stock}</p>
              <input
                type="number"
                min="1"
                max={item.stock}
                value={item.quantity}
                onChange={(e) => {
                  addToCart(item.id, e.target.value);
                }}
              />
              <br></br>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
        </ul>
      )}
      <div>
        <h2>Total: ${totalCompra}</h2>
        <button onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
};

export default Cart;
