import "./index.css";
import Product from "./components/product";
import Products from "./products.json";
import Counter from "./components/Counter";



function App() {
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="row">
            {Products.map((product) => (
              <Product ele={product} />
            ))}
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
}
export default App;
