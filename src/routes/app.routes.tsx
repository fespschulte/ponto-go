import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { MyTimesheets } from "../pages/MyTimesheets";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meus-registros" element={<MyTimesheets />} />
    </Routes>
  );
}
