import React from "react";
// router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainRoutes from "./Routes";

// pages
import DashboardPage from "./pages/DashboardPage";

// css
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${MainRoutes.Dashboard}/:userId`} element={<DashboardPage />} />
        <Route index path={MainRoutes.Dashboard} element={<DashboardPage />} />
        <Route path="*" element={<Navigate to={`${MainRoutes.Dashboard}/12`} />} />
      </Routes>
    </BrowserRouter>
  );
}
