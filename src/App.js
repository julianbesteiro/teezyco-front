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

function App() {
  const { logUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((res) => logUser(res.data))
      .catch(() => console.error("You are not logged in"));
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/individual/:id" element={<Individual />} />
        <Route path="/products/trending" element={<Grid />} />
        <Route path="products/add" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
