import { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Favorite = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { id } = useContext(UserContext);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/api/favorite/${id}`)
        .then((favoritos) => {
          setFavorites(favoritos.data[0].products);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);
  useEffect(() => {
    if (favorites.length > 0) {
      setProducts([]);

      const fetchProducts = favorites.map((e) => {
        return axios
          .get(`http://localhost:3001/api/products/${e}`)
          .then((response) => response.data);
      });

      Promise.all(fetchProducts)
        .then((results) => {
          setProducts(results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [favorites]);

  const handleCarrito = (e, productId) => {
    axios
      .post(`http://localhost:3001/api/cart/add/${id}/${productId}`)
      .then(() => {
        alert("Producto agregado al carrito");
      })
      .catch((err) => console.error(err));
  };

  const handleFavorito = (productId) => {
    axios
      .delete(`http://localhost:3001/api/favorite/remove/${id}/${productId}`)
      .then((favoritos) => {
        alert("Producto eliminado de favoritos");

        setFavorites(favoritos.data.products);
      })
      .catch((err) => console.error(err));
  };

  let x = 4;
  if (window.innerWidth <= 1000) x = 1;

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the remaining letters lowercase for each word
      .join(" "); // Join the words back into a string
  }

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
                        <img
                          id="img"
                          src={
                            product.image
                              ? product.image
                              : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
                          }
                          alt=""
                        />
                      </Link>
                      <div className=" icons">
                        <button
                          className="favs"
                          onClick={() => {
                            handleFavorito(product.id);
                          }}
                        >
                          💔{" "}
                        </button>
                        <button
                          className="carrito"
                          onClick={(e) => {
                            handleCarrito(e, product.id);
                          }}
                        >
                          🛒
                        </button>
                      </div>
                      <h3>{capitalizeFirstLetterOfEachWord(product.title)}</h3>
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

export default Favorite;
