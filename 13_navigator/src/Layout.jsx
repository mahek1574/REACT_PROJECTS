import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
