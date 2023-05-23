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
    console.log("ID", id);
    axios
      .get(`http://localhost:3001/api/purchases/${id}`)
      .then((purchases) => {
        setPurchases(purchases.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log("pur state", purchases);

  return (
    <>
      {purchases &&
        purchases.length > 0 &&
        purchases.map((item, index) => {
          return (
            <div className="row" key={index}>
              <h6>Fecha de compra: </h6>

              <p>{item.createdAt.slice(0, 10)}</p>
              {item.products.map((item, index) => {
                return (
                  <>
                    <h3>-{item.title}</h3>
                    <p>-{item.quantity}</p>
                    <p>-{item.price}</p>
                  </>
                );
              })}
              <h6>Total de compra: </h6>

              <p>
                {item.products.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default Purchases;
