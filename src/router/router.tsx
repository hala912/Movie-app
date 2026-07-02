// src/router/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
