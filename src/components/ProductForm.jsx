import "../css/ProductForm.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import Categories from "./Categories";

const ProductForm = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState("");
  const [product, setProduct] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categories/all")
      .then((categories) => setCategories(categories.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productId !== undefined) {
      axios
        .put(`http://localhost:3001/api/products/mod/${productId}`, {
          size,
          color,
          categoryId,
          stock,
          price,
          title,
          description,
          image,
        })
        .then(() => {
          alert("Producto editado");
          navigate("/");
        })
        .catch(() => alert("Se ha producido un error."));
    } else {
      axios
        .post("http://localhost:3001/api/products/create", {
          size,
          color,
          categoryId,
          stock,
          price,
          title,
          description,
          image,
        })
        .then(() => {
          alert("Producto creado");
          navigate("/");
        })
        .catch(() => alert("Se ha producido un error."));
    }
  };

  useEffect(() => {
    if (productId)
      axios
        .get(`http://localhost:3001/api/products/${productId}`)
        .then((prod) => setProduct(prod.data))
        .then(() => {
          setSize(product.size);
          setColor(product.color);
          setStock(product.stock);
          setPrice(product.price);
          setTitle(product.title.toLowerCase());
          setDescription(product.description);
          setImage(product.image);
        })
        .catch((error) => console.log(error));
  }, [productId]);

  function capitalizeFirstLetterOfEachWord(str) {
    if (str)
      return str
        .split(" ") // Split the string into an array of words
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize the first letter and make the remaining letters lowercase for each word
        .join(" ");
    // Join the words back into a string
    else {
      return;
    }
  }

  return (
    <div className="formContainer">
      <div className="row">
        <div className="cont">
          <img
            src={image || product.image}
            alt=""
            id="imgPreview"
            className="col"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col mb-3 ml-3 mr-3">
            <label for="size" className="form-label">
              Tamaño
            </label>
            <input
              type="text"
              className="form-control bg-transparent text-white"
              id="size"
              placeholder="Ingrese el tamaño"
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </div>
          <div className="col mb-3 ml-3 mr-3">
            <label for="color" className="form-label">
              Color
            </label>
            <input
              type="text"
              className="form-control bg-transparent text-white"
              id="color"
              placeholder="Ingrese el color"
              value={color || product.color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
          <div className="col mb-3 ml-3 mr-3">
            <label for="model" className="form-label">
              Categoria
            </label>

            <select
              className="form-control bg-transparent text-white"
              id="model"
              onChange={(e) => {
                const categoryFiltrada = categories.filter(
                  (cat) => cat.title == e.target.value
                );

                setCategoryId(categoryFiltrada[0].id);
              }}
            >
              {categories
                ? categories.map((value, index) => (
                    <option key={index} id={value.id} value={value.title}>
                      {value.title}
                    </option>
                  ))
                : null}
            </select>
          </div>
        </div>
        <div className="row ">
          <div className="col mb-3 ml-3 mr-3">
            <label for="stock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className="form-control bg-transparent text-white"
              id="stock"
              placeholder="Ingrese el stock"
              value={stock || product.stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
          </div>
          <div className="col mb-3 ml-3 mr-3">
            <label for="price" className="form-label">
              Precio
            </label>
            <input
              type="number"
              className="form-control bg-transparent text-white"
              id="price"
              placeholder="Ingrese el precio"
              value={price || product.price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="col mb-3 ml-3 mr-3">
            <label for="title" className="form-label">
              Título
            </label>
            <input
              type="text"
              className="form-control bg-transparent text-white"
              id="title"
              placeholder="Ingrese el título"
              value={
                capitalizeFirstLetterOfEachWord(title) ||
                capitalizeFirstLetterOfEachWord(product.title)
              }
              onChange={(e) => {
                setTitle(e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
        <div className="mb-3 ml-5 mr-5 ">
          <label for="description" className="form-label">
            Descripción
          </label>
          <textarea
            className="form-control bg-transparent text-white"
            id="description"
            value={description || product.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3 ml-5 mr-5">
          <label for="image" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control bg-transparent text-white "
            id="image"
            value={image || product.image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn bg-transparent ">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
