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

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the remaining letters lowercase for each word
      .join(" "); // Join the words back into a string
  }

  return (
    <>
      <h2>Productos nuevos y a la moda</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {products &&
            products.map((elem, x) => {
              return (
                <Link
                  to={`/products/individual/${elem.id}`}
                  className="swiper-slide"
                  key={x}
                >
                  <img src={elem.image} alt="Imagen 3" height="80%" />

                  <div className="titles">
                    <h3>{capitalizeFirstLetterOfEachWord(elem.title)}</h3>
                    <h3 className="price">${elem.price}</h3>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Mainproducts;
