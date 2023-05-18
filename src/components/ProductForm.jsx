import "../css/ProductForm.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const ProductForm = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
