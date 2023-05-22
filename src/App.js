import "./css/App.css";
import NavigationBar from "./common/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Main from "./common/Main";
import Grid from "./components/Grid";
import Individual from "./components/Individual";
import Login from "./components/Login";
import Register from "./components/Register";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import Footer from "./components/Footer";
import Users from "./components/Users";
import Categories from "./components/Categories";
import CategoriesForm from "./components/CategoriesForm";

function App() {
  const { logUser, id } = useContext(UserContext);
  console.log("app id ", id);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((res) => logUser(res.data))
      .catch(() => console.error("You are not logged in"));
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products/individual/:idProduct"
            element={<Individual />}
          />
          <Route path="/products/trending" element={<Grid />} />
          <Route path="/search/:search" element={<Grid />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="/products/edit/:productId" element={<ProductForm />} />
          <Route path="/user/products" element={<Grid />} />
          <Route path="/users/all" element={<Users />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/user/categories" element={<Categories />} />

          <Route path="/categories/add" element={<CategoriesForm />} />
          <Route
            path="/categories/edit/:categoryId"
            element={<CategoriesForm />}
          />

          <Route path="/categories/:category" element={<Grid />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
