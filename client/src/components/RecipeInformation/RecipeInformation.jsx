import Styles from "./RecipeInformation.module.css";
import { useLocation } from "react-router-dom";
const RecipeInformation = () => {
  const location = useLocation();
  const { name, description, difficulty, ingredients, preparation } =
    location.state;
  return (
    <div className={Styles.recipe_information}>
      <h1>Recipe: {name}</h1>
      <p>Description: {description}</p>
      <p>Difficulty: {difficulty}</p>
      <div>
        <h3>Ingredients</h3>
        <ul className={Styles.recipe_information_container}>
          {ingredients.map((ingredient, index) => (
            <li className={Styles.ingredients} key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <h3>Recipe Preparation Method</h3>
        <p className={Styles.preparation}>{preparation}</p>
      </div>
    </div>
  );
};

export default RecipeInformation;
