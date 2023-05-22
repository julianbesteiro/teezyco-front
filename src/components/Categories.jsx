import React, { useState } from "react";
import "../css/Grid.css";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  const { pathname } = useLocation();
  const [categories, setCategories] = useState();
  const [deleteCategory, setDeleteCategory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (categories)
      axios
        .get("http://localhost:3001/api/categories/all")
        .then((categories) => {
          setCategories(categories.data);
        })
        .catch((err) => console.error(err));
  }, [deleteCategory]);

  useEffect(() => {
    if (!categories)
      axios
        .get("http://localhost:3001/api/categories/all")
        .then((categories) => {
          setCategories(categories.data);
        })
        .catch((err) => console.error(err));
  }, []);

  const handleEdit = (e, categoryId) => {
    if (categoryId) navigate(`/categories/edit/${categoryId}`);
  };

  const handleDelete = (e, categoryId) => {
    axios
      .delete(`http://localhost:3001/api/categories/delete/${categoryId}`)
      .then(() => {
        setDeleteCategory(!deleteCategory);
        console.log("Categoria eliminada");
      })
      .catch((err) => console.error(err));
    navigate(`/user/categories`);
  };

  let x = 4;
  if (window.innerWidth <= 1000) x = 1;

  return (
    <>
      {categories &&
        categories.length > 0 &&
        categories.map((item, index) => {
          if (index % x === 0) {
            const remainingItems = categories.slice(index);
            const itemsToShow =
              remainingItems.length >= x
                ? remainingItems.slice(0, x)
                : remainingItems;

            return (
              <div className="row" key={index}>
                {itemsToShow.map((category, subIndex) => (
                  <div className="col" key={`${index}-${subIndex}`}>
                    <div className="elem">
                      <Link to={`/categories/${category.id}`}>
                        <img
                          id="img"
                          src={
                            category.image
                              ? category.image
                              : "https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp"
                          }
                          alt=""
                        />
                      </Link>

                      <div className=" icons">
                        {pathname === "/user/categories" ? (
                          <button
                            className="favs"
                            onClick={(e) => {
                              handleEdit(e, category.id);
                            }}
                          >
                            ✎
                          </button>
                        ) : (
                          ""
                        )}
                        {pathname === "/user/categories" ? (
                          <button
                            className="carrito"
                            onClick={(e) => {
                              handleDelete(e, category.id);
                            }}
                          >
                            🗑️
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                      <h3>{category.title}</h3>
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

export default Categories;
