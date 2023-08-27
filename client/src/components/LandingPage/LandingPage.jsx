import Styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div className={Styles.landing_page}>
        <div>
          <h1>
            Search your favourite recipes among <br /> hundreds of recipes.
          </h1>
          <p>
            We have got a desert of mouth watering <br /> recipes just waiting
            for you.
          </p>
          <button className={Styles.explore_button}>
            <Link to="/recipe">Explore Recipes</Link>
          </button>
          <div className={Styles.cardsContainer}>
            <img src="./images/ingredient card.svg" alt="ingredients" />
            <img src="./images/preparation-method.svg" alt="ingredients" />
            <img src="./images/difficulty-level.svg" alt="ingredients" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={Styles.wave}
        >
          <path
            fill="#ff7033"
            fillOpacity="1"
            d="M0,192L24,181.3C48,171,96,149,144,165.3C192,181,240,235,288,229.3C336,224,384,160,432,117.3C480,75,528,53,576,53.3C624,53,672,75,720,101.3C768,128,816,160,864,192C912,224,960,256,1008,234.7C1056,213,1104,139,1152,122.7C1200,107,1248,149,1296,165.3C1344,181,1392,171,1416,165.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <img
        className={Styles.landing_page_image}
        src="./images/background.png"
        alt="a display of recipe"
      />
    </>
  );
};

export default LandingPage;
