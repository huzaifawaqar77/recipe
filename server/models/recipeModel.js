const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  recipe_name: { type: String, required: true },
  recipe_ingredients: [{ type: String, required: false }],
  recipe_description: { type: String, required: true },
  difficulty_level: { type: String, required: true },
  recipe_category: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
