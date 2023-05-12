import "./css/App.css";
import NavigationBar from "./common/NavigationBar";
import img from "./utils/z render.png";
import Categories from "./common/Categories";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <img src={img} alt="LogoTeeZCo" width="800px" />
      </header>
      <Categories />
    </div>
  );
}

export default App;
