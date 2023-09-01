import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { MyTimesheets } from "../pages/MyTimesheets";
import PrivateRoute from "../components/PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login loading={false} />} />
      <PrivateRoute
        path="/dashboard"
        element={<Dashboard />}
        allowedRoles={["admin"]}
      />
      <PrivateRoute
        path="/meus-registros"
        element={<MyTimesheets />}
        allowedRoles={["user"]}
      />
    </Routes>
  );
}
