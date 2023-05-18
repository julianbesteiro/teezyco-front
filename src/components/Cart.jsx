import React, { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
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
    axios.put(`http://localhost:3001/api/cart/delete/${id}/${productId}`).then(()=>{
      setCartItems(cartItems.filter((item) => item.id !== productId));
    })
    .catch((err) => console.error(err));
  };
  

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
            item.image
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
    </div>
  );
};

export default Cart;
