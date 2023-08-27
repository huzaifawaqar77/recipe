import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import RecipeComponent from "./components/RecipeComponent/RecipeComponent";
import AboutUs from "./components/AboutUs/Aboutus";
import ContactPage from "./components/Contact/Contact";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/Admin/Admin";
import RecipeInformation from "./components/RecipeInformation/RecipeInformation";
import RecipeContextProvider from "./contexts/recipeContext";
function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/recipe" element={<RecipeComponent />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/dashboard" element={<AdminDashboard />} />
          <Route
            path="/recipeInformation/:id"
            element={<RecipeInformation />}
          />
        </Routes>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
