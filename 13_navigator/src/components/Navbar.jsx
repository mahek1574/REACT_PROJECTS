import { FaPhoneAlt, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
    
      <nav className="nav-links">
        <NavLink to="/Home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/About" className="nav-link">
          About
        </NavLink>
        <NavLink to="/Product" className="nav-link">
          Product
        </NavLink>
        <NavLink to="/Setting" className="nav-link">
          Setting
        </NavLink>
      </nav>


      <div className="right">
        <a href="tel:+911234567890" className="icon">
          <FaPhoneAlt />
        </a>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
