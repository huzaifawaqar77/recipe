const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const recipeRoutes = require("./routes/recipeRoutes");
const adminLoginRoute = require("./routes/adminLoginRoute");
const app = express();
const cors = require("cors");
const { configDotenv } = require("dotenv");
//middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 3000...");
    })
  )
  .catch((err) => console.log("Error Connecting to the database: ", err));

app.use("/api", recipeRoutes);
app.use("/api", adminLoginRoute);
