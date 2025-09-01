import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/Login";
import Home from "./pages/home";
import About from "./pages/About";
import Product from "./pages/Product";
import Protected from "./pages/Protected";
import Setting from "./pages/Setting";

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />

      
        <Route element={<Protected isAuthenticated={isAuthenticated} />}>
          <Route element={<Layout />}>
          
            <Route index element={<Home />} />
      
            <Route path="home" element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
