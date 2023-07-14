import React, { useState } from "react";
import "../css/Grid.css";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Purchases = () => {
  const [purchases, setPurchases] = useState();
  const { id } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/purchases/${id}`)
      .then((purchases) => {
        setPurchases(purchases.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the remaining letters lowercase for each word
      .join(" "); // Join the words back into a string
  }

  return (
    <>
      <h2>Compras:</h2>
      {purchases &&
        purchases.length > 0 &&
        purchases.map((item, index) => {
          return (
            <div className="row rowPurchases" key={index}>
              <div className="col">
                <h6>Fecha de compra: </h6>

                <p>{item.createdAt.slice(0, 10)}</p>
              </div>

              {item.products.map((item, index) => {
                return (
                  <>
                    <div className="col">
                      <h3>{capitalizeFirstLetterOfEachWord(item.title)}</h3>

                      <p>Unidades: {item.quantity}</p>
                      <p>Precio unitario: ${item.price}</p>
                    </div>
                  </>
                );
              })}
              <h6>
                Total de compra: $
                {item.products.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </h6>
            </div>
          );
        })}
    </>
  );
};

export default Purchases;
