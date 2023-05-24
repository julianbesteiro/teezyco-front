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
                      <h3>{item.title}</h3>

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
