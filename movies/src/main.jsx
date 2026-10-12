import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviesPage";


const App = () => {
  return (
      <MovieDetailsPage movie={sample} images={images} />
      );
};


const images = [
  "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
  "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
  "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
]


//const rootElement = createRoot( document.getElementById("root") )
//rootElement.render(<App />);