import Styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
const SideBar = ({ menuToggle }) => {
  return (
    <div className={Styles.sidebar}>
      <ul>
        <li>
          <Link to="/recipe">Recipe</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
