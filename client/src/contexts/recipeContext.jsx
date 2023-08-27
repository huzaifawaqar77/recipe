import { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  // useEffect Hook Fetching Data from API
  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await fetch("http://localhost:3000/api/recipes");
      const data = await recipes.json();
      setRecipes(data);
    };
    getRecipes();
  }, []);
  return (
    <RecipeContext.Provider value={recipes}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
