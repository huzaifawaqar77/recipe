const express = require("express");
const {
  addRecipe,
  removeRecipe,
  getRecipes,
} = require("../controllers/recipeController");
const router = express.Router();

router.get("/recipes", getRecipes);

router.post("/addrecipe", addRecipe);

router.delete("/deleterecipe", removeRecipe);

module.exports = router;
