// src/router/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
