import "../css/ProductForm.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const ProductForm = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imgPreview, setImg] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productId !== undefined) {
      axios
        .put(`http://localhost:3001/api/products/mod/${productId}`, {
          size,
          color,
          model,
          stock,
          price,
          title,
          description,
          image,
        })
        .then((product) => {
          console.log("Producto editado");
          navigate("/");
        })
        .catch(() => alert("Se ha producido un error."));
    } else {
      axios
        .post("http://localhost:3001/api/products/create", {
          size,
          color,
          model,
          stock,
          price,
          title,
          description,
          image,
        })
        .then((product) => {
          console.log("Producto creado");
          navigate("/");
        })
        .catch(() => alert("Se ha producido un error."));
    }
  };

  return (
    <div className="formContainer">
      <div className="row">
        <div className="cont">
          <img src={image} alt="" id="imgPreview" className="col" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div class="col mb-3 ml-3 mr-3">
            <label for="size" class="form-label">
              Tamaño
            </label>
            <input
              type="text"
              className="form-control bg-transparent text-white"
              id="size"
              placeholder="Ingrese el tamaño"
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </div>
          <div class="col mb-3 ml-3 mr-3">
            <label for="color" class="form-label">
              Color
            </label>
            <input
              type="text"
              class="form-control bg-transparent text-white"
              id="color"
              placeholder="Ingrese el color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
          <div class="col mb-3 ml-3 mr-3">
            <label for="model" class="form-label">
              Modelo
            </label>
            <input
              type="text"
              class="form-control bg-transparent text-white"
              id="model"
              placeholder="Ingrese el modelo"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row ">
          <div class="col mb-3 ml-3 mr-3">
            <label for="stock" class="form-label">
              Stock
            </label>
            <input
              type="number"
              class="form-control bg-transparent text-white"
              id="stock"
              placeholder="Ingrese el stock"
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
          </div>
          <div class="col mb-3 ml-3 mr-3">
            <label for="price" class="form-label">
              Precio
            </label>
            <input
              type="number"
              class="form-control bg-transparent text-white"
              id="price"
              placeholder="Ingrese el precio"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div class="col mb-3 ml-3 mr-3">
            <label for="title" class="form-label">
              Título
            </label>
            <input
              type="text"
              class="form-control bg-transparent text-white"
              id="title"
              placeholder="Ingrese el título"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 ml-5 mr-5 ">
          <label for="description" class="form-label">
            Descripción
          </label>
          <textarea
            class="form-control bg-transparent text-white"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div class="mb-3 ml-5 mr-5">
          <label for="image" class="form-label">
            Imagen
          </label>
          <input
            type="text"
            class="form-control bg-transparent text-white "
            id="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn bg-transparent ">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
