import "./App.css";
import ProductsContainer from "./Components/ProductsContainer";
import fruits from "./data/data";

function App() {
  return (
    <>
      <ProductsContainer products={fruits} />
    </>
  );
}

export default App;
