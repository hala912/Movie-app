// src/router/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import LibararyPage from "../pages/LibararyPage/LibararyPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import MylistPage from "../pages/MylistPage/MylistPage";
import ProtectedRoute from "./protectedRoute";
import DramaPage from "../pages/DramaPage/DramaPage";
import SeriesDetailsPage from "../pages/SeriesDetailsPage/SeriesDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/" element={<Home />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/series/:id" element={<SeriesDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Library" element={<LibararyPage />} />
        <Route path="/mylist" element={<MylistPage />} />
        <Route path="/drama" element={<DramaPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
