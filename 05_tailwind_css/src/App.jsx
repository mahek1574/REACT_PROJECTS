import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import products from "./products.json";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <section className="bg-gray-100 py-5">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap justify-between gap-y-4">
            {products.map((product, index) => (
              <div key={index}>
                <Product ele={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );    
}

export default App;
