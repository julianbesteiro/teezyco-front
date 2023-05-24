import "../css/ProductForm.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const CategoriesForm = () => {
  const [category, setCategory] = useState("");

  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoryId !== undefined) {
      axios
        .put(`http://localhost:3001/api/categories/mod/${categoryId}`, {
          title,
          image,
        })
        .then((category) => {
          alert("Categoria editada");
          navigate("/user/categories");
        })
        .catch(() => alert("Se ha producido un error."));
    } else {
      axios
        .post("http://localhost:3001/api/categories/create", {
          title,
          image,
        })
        .then((category) => {
          alert("Categoria creada");
          navigate("/user/categories");
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
          <div className="col mb-3 ml-3 mr-3">
            <label for="model" className="form-label">
              Categoria
            </label>
            <input
              type="text"
              className="form-control bg-transparent text-white"
              id="model"
              placeholder="Ingrese el modelo"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mb-3 ml-5 mr-5">
          <label for="image" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control bg-transparent text-white "
            id="image"
            value={image}
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

export default CategoriesForm;
