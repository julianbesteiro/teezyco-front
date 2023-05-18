import React, { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Cart = () => {
   const [cartItems, setCartItems] = useState([]);

  const { id } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/cart/${id}`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  
// // const addToCart = (product) => {
//   //   setCartItems([...cartItems, product]);
//   // };
  
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={
            false
              ? item.image
              : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
          } alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
        </ul>
      )}

      {/* <h3>Agregar al carrito:</h3>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div> */}
    </div>
  );
};

export default Cart;
