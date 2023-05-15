import "./css/App.css";
import NavigationBar from "./common/NavigationBar";
import img from "./utils/z render.png";
import Categories from "./common/Categories";
import Mainproducts from "./common/Mainproducts";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <img src={img} alt="LogoTeeZCo" width="800px" />
      </header>
      <Categories />
      <Mainproducts/>
    </div>
  );
}

export default App;
