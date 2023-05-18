import { useEffect, useState } from "react";
import "../css/Grid.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Grid = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/all")
      .then((productos) => {

        setProducts(productos.data);
      })
      .catch((err) => console.error(err));
  }, []);
  let x = 4;
  if (window.innerWidth <= 1000) x = 1;

  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((item, index) => {
          if (index % x === 0) {
            const remainingItems = products.slice(index);
            const itemsToShow =
              remainingItems.length >= x
                ? remainingItems.slice(0, x)
                : remainingItems;

            return (
              <div className="row" key={index}>
                {itemsToShow.map((product, subIndex) => (
                  <div className="col" key={`${index}-${subIndex}`}>
                    <div className="elem">
                      <Link to={"/products/individual/" + product.id}>
                        <img src={
            false
              ? product.image
              : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
          } alt="" />
                      </Link>
                      <div className=" icons">
                        <p className="favs">♡</p>
                        <p className="carrito">🛒</p>
                      </div>
                      <h3>{product.title}</h3>
                      <h3 className="price">
                        precio: ${product.price} o 6 cuotas de $
                        {Math.floor(product.price / 6)}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

export default Grid;
