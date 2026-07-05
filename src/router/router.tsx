// src/router/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import LibararyPage from "../pages/LibararyPage/LibararyPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/Library" element={<LibararyPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
