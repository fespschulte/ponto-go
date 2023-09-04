import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { MyTimesheets } from "../pages/MyTimesheets";
import { useEffect, useState } from "react";
import { userQuery } from "../graphQL/queries";
import { useQuery } from "@apollo/client";
import { getAccessToken, setAccessToken } from "../services/auth";

function ProtectedRoute({ element }) {
  const loggedIn = getAccessToken();

  if (loggedIn) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

export function AppRoutes() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    if (user.login.user.role.name == "admin") {
      navigate("/dashboard");
    } else if (user.login.user.role.name == "user") {
      navigate("/meus-registros");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setAccessToken("");
    navigate("/login");
  };

  const { data, loading, error } = useQuery(userQuery, {
    skip: !getAccessToken(),
  });

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
  }, [!!data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute element={<Dashboard onLogout={handleLogout} />} />
        }
      />
      <Route
        path="/meus-registros"
        element={
          <ProtectedRoute
            element={<MyTimesheets onLogout={handleLogout} user={user} />}
          />
        }
      />
    </Routes>
  );
}
