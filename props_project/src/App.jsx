import "./App.css";
import Product from "./components/product";
import Products from "./Products.json";

function App() {
  const product = {};

  return (
    <section className="products">
      <div className="container">
        <div className="row">
          {Products.map((product) => (
            <Product ele={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default App;
