import Styles from "./Recipe.module.css";
const Recipe = ({ name, difficulty, url }) => {
  return (
    <div className={Styles.recipe_card}>
      <img className={Styles.recipe_image} src={url} alt="recipe" />
      <div className={Styles.recipe_details}>
        <h2 className={Styles.recipe_name}>{name}</h2>
        <p className={difficulty}>Difficulty: {difficulty}</p>
      </div>
    </div>
  );
};

export default Recipe;
