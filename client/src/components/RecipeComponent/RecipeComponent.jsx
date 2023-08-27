import { useState, useContext } from "react";
import { RecipeContext } from "../../contexts/recipeContext";
import Recipe from "../Recipe/Recipe";
import Styles from "./RecipeComponent.module.css";
import { Link } from "react-router-dom";
const RecipeComponent = () => {
  const allRecipes = useContext(RecipeContext);

  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [recipeName, setRecipeName] = useState("");

  // search functionality

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredRecipes = allRecipes.filter((recipe) => {
      return recipe.recipe_name
        .toLowerCase()
        .includes(recipeName.toLowerCase());
    });

    setFilteredRecipes(filteredRecipes);
    // return messsage if no recipe found
    if (filteredRecipes.length === 0) {
      alert("No recipe found");
    }
  };

  // Filtering the list of recipes based on the category

  const handleClick = (filter) => {
    const filteredRecipes = allRecipes.filter((recipe) => {
      return recipe.recipe_category === filter.toLowerCase();
    });

    setFilteredRecipes(filteredRecipes); // Set the filtered recipes
  };

  const resetFilter = () => {
    setFilteredRecipes([]); // Reset the filter
  };

  // return function

  return (
    <div className={Styles.recipe_component}>
      <h1 className={Styles.recipe_component_heading}>
        CHOOSE FROM A WIDE RANGE OR RECIPES
      </h1>
      <div className={Styles.recipe_category_search}>
        <div className={Styles.button_group}>
          <button className={Styles.recipes_all} onClick={resetFilter}>
            ALL RECIPES
          </button>
          <button
            onClick={() => handleClick("breakfast")}
            className={Styles.recipe_breakfast}
          >
            BREAKFAST
          </button>
          <button
            onClick={() => handleClick("lunch")}
            className={Styles.recipe_lunch}
          >
            LUNCH
          </button>
          <button
            onClick={() => handleClick("dinner")}
            className={Styles.recipe_dinner}
          >
            DINNER
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className={Styles.searchbar}
            placeholder="Search recipe"
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </form>
      </div>
      <div className={Styles.recipes_container}>
        {(filteredRecipes.length > 0 ? filteredRecipes : allRecipes).map(
          (recipe) => (
            <Link
              to={`/recipeInformation/${recipe._id}`}
              style={{ textDecoration: "none" }}
              state={{
                name: recipe.recipe_name,
                description: recipe.recipe_description,
                difficulty: recipe.difficulty_level,
                ingredients: recipe.recipe_ingredients,
                preparation: recipe.preparation_method,
              }}
              key={recipe._id}
            >
              <Recipe
                difficulty={recipe.difficulty_level}
                url={recipe.imageUrl}
                name={recipe.recipe_name}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default RecipeComponent;
