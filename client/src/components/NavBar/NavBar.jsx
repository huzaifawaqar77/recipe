import Styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/logo.svg";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
const NavBar = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggled(!menuToggled);
  };
  return (
    <nav className={Styles.navigation}>
      <ul>
        <li>
          <img src={Logo} alt="business logo" />
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/recipe">RECIPE</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li onClick={handleMenuToggle}>
          <img
            src="./icons/hamburger.svg"
            alt="hamburger menu"
            style={{ cursor: "pointer" }}
            onClick={handleMenuToggle}
          />
          {menuToggled && <SideBar />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
