import { useEffect, useState } from "react";
import "../css/slider.css";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";

const Mainproducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/all")
      .then((products) => {
        setProducts(products.data);
        products.splice(0, 12);
      })
      .catch((err) => console.error(err));
  }, []);

  let mySwiper;

  useEffect(() => {
    const updateSwiper = () => {
      if (products) {
        if (mySwiper) mySwiper.destroy();

        const slidesPerView =
          Math.floor(window.innerWidth / 400) <= 10
            ? Math.floor(window.innerWidth / 400)
            : 1;

        mySwiper = new Swiper(".swiper-container", {
          slidesPerView: slidesPerView,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }
    };

    updateSwiper(); // Ejecutar la función una vez al cargar la página

    // Agregar el listener del evento resize
    window.addEventListener("resize", updateSwiper);

    return () => {
      // Limpiar el listener del evento resize al desmontar el componente
      window.removeEventListener("resize", updateSwiper);
      if (mySwiper) mySwiper.destroy();
    };
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
                  <img src={elem.image} alt="Imagen 3" height="80%" />

                  <div className="titles">
                    <h3>{elem.title}</h3>
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
