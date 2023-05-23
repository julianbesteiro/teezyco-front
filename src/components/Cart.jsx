import React, { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [productId, setProductId] = useState("");

  const { id } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/cart/${id}`)
      .then((response) => {
       // console.log("response.data del get",response.data);
        setCartItems(response.data);
      })
      .catch((err) => console.error(err));
  }, [id, quantities]);

  const removeFromCart = (productId) => {
    axios
      .put(`http://localhost:3001/api/cart/delete/${id}/${productId}`)
      .then(() => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
      })
      .catch((err) => console.error(err));
  };




  const addToCart = (itemId, number) => {
    setProductId(itemId);
    
    axios
    .post(`http://localhost:3001/api/cart/add/${id}/${itemId}`, {
      quantity: number, // Enviar la cantidad al backend
    })
    .then((response) => {
     // console.log("response.data del post",response.data);
      setQuantities({...quantities, [itemId]: number})
      
    })
    .catch((err) => console.error(err));
    

  };

  const getTotalCompra = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = parseInt(quantities[item.id]) || 1; // Convertir a número entero o usar 1 por defecto
      return total + item.price * itemQuantity;
    }, 0);
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
              <img
                src={
                  item.image
                    ? item.image
                    : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
                }
                alt=""
              />
              <h3>{item.title}</h3>
              <p>
                Price: ${item.price * ( item.quantity)}
              </p>

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
        <h2>Total: ${getTotalCompra()}</h2>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Cart;
