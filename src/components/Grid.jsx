import { useEffect, useState } from "react";
import "../css/Grid.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Grid = () => {
  const [products, setProducts] = useState();
  const { search } = useParams();

  const { pathname } = useLocation();

  const navigate = useNavigate();

 
  useEffect(() => {
    if (search !== undefined)
      axios
        .get(`http://localhost:3001/api/products/search/${search}`)
        .then((products) => {
          console.log("PRODUCTS en busqueda", products);
          setProducts(products.data);
        })
        .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    if (!search)
      axios
        .get("http://localhost:3001/api/products/all")
        .then((products) => {
          setProducts(products.data);
        })
        .catch((err) => console.error(err));
  }, [products]);

  const handleEdit = (e, productId) => {
    if (productId) navigate(`/products/edit/${productId}`);
  };
  const handleDelete = (e, productId) => {
      axios
    .delete(`http://localhost:3001/api/products/delete/${productId}`)
      .then(() => {
        console.log("Producto eliminado");
      })
      .catch((err) => console.error(err));
    navigate(`/user/products`);
  };

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
                          <p className="favs">♡</p>
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
                          <p className="carrito">🛒</p>
                        )}
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
