const Recipe = require("../models/recipeModel");
//getting all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// adding a new recipe
const addRecipe = async (req, res) => {
  const {
    recipe_name,
    recipe_description,
    recipe_ingredients,
    imageUrl,
    difficulty_level,
    recipe_category,
  } = req.body;
  if (
    !recipe_name ||
    !recipe_description ||
    !recipe_ingredients ||
    !imageUrl ||
    !difficulty_level ||
    !recipe_category
  ) {
    res.status(400).json({ error: "Missing required fields" });
  }
  const newRecipe = new Recipe({
    recipe_name,
    recipe_description,
    recipe_ingredients,
    imageUrl,
    difficulty_level,
    recipe_category,
  });
  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// removing a recipe
const removeRecipe = async (req, res) => {
  const { recipeId } = req.body;
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
    res.status(200).json(deletedRecipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addRecipe, removeRecipe, getRecipes };
