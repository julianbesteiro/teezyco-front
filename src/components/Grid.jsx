import { useEffect, useState } from "react";
import "../css/Grid.css";

const Grid = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    let arr = [];
    for (let i = 0; i <= 29; i++) {
      arr.push({
        id: i,
        price: 200 + i,
        nombre: "aesthethic 200" + i,
        desc: "remera oversucia aaaa",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp",
      });
    }
    setProducts(arr);
  }, []);
  return (
    <div className="container">
      {products
        ? products.map((item, index) => {
            if (index % 3 === 0) {
              return (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="elem">
                      <img src={item.img} alt="" />
                      <h3>{item.nombre}</h3>
                      <h3 className="price">precio: ${item.price}</h3>
                    </div>
                  </div>
                  <div className="col">
                    <div className="elem">
                      <img src={products[index + 1].img} alt="" />
                      <h3>{products[index + 1].nombre}</h3>
                      <h3 className="price">
                        precio: ${products[index + 1].price}
                      </h3>
                    </div>
                  </div>
                  <div className="col">
                    <div className="elem">
                      <img src={products[index + 1].img} alt="" />
                      <h3>{products[index + 2].nombre}</h3>
                      <h3 className="price">
                        precio: ${products[index + 2].price}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default Grid;
