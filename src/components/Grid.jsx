import { useContext, useEffect, useState } from "react";
import "../css/Grid.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Grid = () => {
  const [products, setProducts] = useState();
  const [deleteProduct, setDeleteProduct] = useState(false);
  //const [favorites, setFavorites] = useState([]);
  let { search, category } = useParams();
  const { id } = useContext(UserContext);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (search && search != "undefined")
      axios
        .get(`http://localhost:3001/api/products/search/${search}`)
        .then((products) => {
          setProducts(products.data);
        })
        .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    if (pathname.includes("categories"))
      axios
        .get(`http://localhost:3001/api/products/search/${category}`)
        .then((products) => {
          setProducts(products.data);
        })
        .catch((err) => console.error(err));
  }, [category]);

  useEffect(() => {
    if (!pathname.includes("favorites") && !search && !category)
      axios
        .get("http://localhost:3001/api/products/all")
        .then((products) => {
          setProducts(products.data);
        })
        .catch((err) => console.error(err));
  }, [deleteProduct]);

  const handleEdit = (e, productId) => {
    if (productId) navigate(`/products/edit/${productId}`);
  };
  const handleDelete = (e, productId) => {
    axios
      .delete(`http://localhost:3001/api/products/delete/${productId}`)
      .then(() => {
        setDeleteProduct(!deleteProduct);
        alert("Producto eliminado");
      })
      .catch((err) => console.error(err));
    navigate(`/user/products`);
  };

  const handleCarrito = (e, productId) => {
    if(!id){ alert("debes estar logueado para usar esta funcion")}
    else{axios
      .post(`http://localhost:3001/api/cart/add/${id}/${productId}`)
      .then(() => {
        alert("Producto agregado al carrito");
      })
      .catch((err) => console.error(err));}
    
  };

  const handleFavorito = (productId) => {

    if(!id){ alert("debes estar logueado para usar esta funcion")}
    else{axios
      .post(`http://localhost:3001/api/favorite/add/${id}/${productId}`)
      .then((favoritos) => {
        alert("Producto agregado a favoritos");
      })
      .catch((err) => console.error(err));}
    
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
                        {pathname === "/user/products" ? (
                          <button
                            className="favs"
                            onClick={(e) => {
                              handleEdit(e, product.id);
                            }}
                          >
                            ✎
                          </button>
                        ) : (
                          <button
                            className="favs"
                            onClick={() => {
                              handleFavorito(product.id);
                            }}
                          >
                            ♡{" "}
                          </button>
                        )}
                        {pathname === "/user/products" ? (
                          <button
                            className="carrito"
                            onClick={(e) => {
                              handleDelete(e, product.id);
                            }}
                          >
                            🗑️
                          </button>
                        ) : (
                          <button
                            className="carrito"
                            onClick={(e) => {
                              handleCarrito(e, product.id);
                            }}
                          >
                            🛒
                          </button>
                        )}
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

export default Grid;
