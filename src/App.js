import "./css/App.css";
import NavigationBar from "./common/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Main from "./common/Main";
import Grid from "./components/Grid";
import Individual from "./components/Individual";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Individual />} />
        <Route path="/products/trending" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
