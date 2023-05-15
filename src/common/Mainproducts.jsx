import { useEffect, useState } from "react";
import "../css/slider.css";
import Swiper from "swiper";

const Mainproducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
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

  useEffect(() => {
    if (products) {
      let mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, [products]);

  return (
    <>
      <h2>Productos nuevos y a la moda</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {products &&
            products.map((elem, x) => {
              return (
                <div className="swiper-slide" key={x}>
                  <img
                    src={
                      "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
                    }
                    alt="Imagen 3"
                  />
                  <div className="titles">
                    <h3>{elem.nombre}</h3>
                    <h3 className="price">${elem.price}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Mainproducts;
