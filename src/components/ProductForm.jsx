import "../css/ProductForm.css";

const ProductForm = () => (
  <div className="formContainer">
    <form>
      <div class="mb-3">
        <label for="size" class="form-label">
          Tamaño
        </label>
        <input
          type="text"
          className="form-control bg-transparent text-white"
          id="size"
          placeholder="Ingrese el tamaño"
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
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">
          Descripción
        </label>
        <textarea
          class="form-control bg-transparent text-white"
          id="description"
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
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Guardar
      </button>
    </form>
  </div>
);

export default ProductForm;
