import Styles from "./Admin.module.css";
import { useState, useContext } from "react";
import { RecipeContext } from "../../contexts/recipeContext";
const AdminDashboard = () => {
  const [recipeName, setRecipeName] = useState("");
  const [searchRecipeName, setSearchRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeDifficulty, setRecipeDifficulty] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");
  const [recipeImageUrl, setRecipeImageUrl] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  const [searchFilteredRecipes, setSearchFilteredRecipes] = useState([]);

  // recipe delete handler
  const handleSubmitDelete = async (e) => {
    e.preventDefault();

    const recipe = await fetch(`http://localhost:3000/api/deleterecipe`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipeId }),
    });
    const recipeResponse = await recipe.json();
    if (recipe.ok && recipeResponse) {
      alert("Recipe Deleted Successfully");
    } else {
      alert("Something went wrong while deleting the recipe");
    }
  };
  // recipe submit handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    const AddRecipe = async () => {
      const inputElement = document.getElementById("ingredients_input");
      const inputValue = inputElement.value;
      const inputArray = inputValue
        .split(",")
        .map((element) => element.trim())
        .filter((element) => element !== "");
      setRecipeIngredients(inputArray);
    };
    AddRecipe();
    const recipeToAdd = {
      recipe_name: recipeName,
      recipe_ingredients: recipeIngredients,
      recipe_description: recipeDescription,
      difficulty_level: recipeDifficulty,
      recipe_category: recipeCategory,
      imageUrl: recipeImageUrl,
    };
    const recipe = await fetch("http://localhost:3000/api/addrecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeToAdd),
    });
    console.log(recipeToAdd);
    const recipeResponse = await recipe.json();
    if (recipe.ok && recipeResponse) {
      alert("Recipe Added Successfully");
    } else {
      alert("Something went wrong while adding the recipe");
    }
  };

  // using recipeContext
  const allRecipes = useContext(RecipeContext);

  // implement search functionality to search in all recipes
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredRecipes = allRecipes.filter((recipe) => {
      return recipe.recipe_name
        .toLowerCase()
        .includes(searchRecipeName.toLowerCase());
    });
    setSearchFilteredRecipes(filteredRecipes);
    console.log(filteredRecipes);
    // return messsage if no recipe found
    if (filteredRecipes.length === 0) {
      alert("No recipe found");
    }
  };
  // stop anyone from accessing this page without logging in
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/admin";
  }
  return (
    <div className={Styles.admin_dashboard_page}>
      <h1>Admin Dashboard</h1>
      <div className={Styles.admin_dashboard_container}>
        <div className={Styles.admin_dashboard}>
          <h2>Manage Recipes</h2>
          <div className={Styles.admin_dashboard_buttons}>
            <h1>ADD RECIPE</h1>
            <form onSubmit={handleSubmit}>
              <label>Recipe Name</label>
              <input
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                type="text"
                placeholder="recipe name"
              />
              <label>Recipe Description</label>
              <input
                value={recipeDescription}
                onChange={(e) => setRecipeDescription(e.target.value)}
                type="text"
                placeholder="recipe description"
              />
              <label>Recipe Difficulty</label>
              <input
                value={recipeDifficulty}
                onChange={(e) => setRecipeDifficulty(e.target.value)}
                type="text"
                placeholder="recipe difficulty"
              />
              <label>Recipe Category</label>
              <input
                value={recipeCategory}
                onChange={(e) => setRecipeCategory(e.target.value)}
                type="text"
                placeholder="recipe category"
              />
              <label>Recipe Image Url</label>
              <input
                value={recipeImageUrl}
                onChange={(e) => setRecipeImageUrl(e.target.value)}
                type="text"
                placeholder="recipe image url"
              />
              <label>Recipe Ingredients (separate by comma)</label>
              <input
                type="text"
                id="ingredients_input"
                value={recipeIngredients}
                onChange={(e) => setRecipeIngredients(e.target.value)}
                placeholder="recipe ingredients"
              />
              <button>Add Recipe</button>
            </form>
          </div>
          <h1>DELETE RECIPE</h1>
          <form onSubmit={handleSubmitDelete}>
            <label>Recipe ID</label>
            <input
              value={recipeId}
              onChange={(e) => setRecipeId(e.target.value)}
              type="text"
              placeholder="recipe ID"
            />
            <button className={Styles.deleteButton}>Delete Recipe</button>
          </form>
        </div>
        <div className={Styles.admin_recipe_show}>
          <form onSubmit={handleSearchSubmit}>
            <input
              value={searchRecipeName}
              onChange={(e) => setSearchRecipeName(e.target.value)}
              type="text"
              placeholder="search all recipes"
            />
            <button>Search</button>
          </form>
          <h1>Total Recipes: {allRecipes.length}</h1>
          <ul>
            {searchFilteredRecipes.map((recipe) => (
              <li key={recipe._id}>
                <div className={Styles.admin_recipe_show_single_recipe}>
                  <p>
                    Recipe ID:{" "}
                    <span className={Styles.recipeInformation}>
                      {recipe._id}
                    </span>
                  </p>
                  <p>
                    Recipe Name:{" "}
                    <span className={Styles.recipeInformation}>
                      {recipe.recipe_name}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
