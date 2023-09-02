// import { ReactNode } from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";

// interface PrivateRouteProps {
//   element: ReactNode;
//   allowedRoles: string[];
// }

// export function PrivateRoute({
//   element,
//   allowedRoles,
//   ...rest
// }: PrivateRouteProps) {
//   const { isAuthenticated, user } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (allowedRoles.includes(user?.role)) {
//     return <Route {...rest} element={element} />;
//   } else {
//     // Redirecionar para uma página de acesso negado ou fazer algo apropriado
//     return <Navigate to="/" />;
//   }
// }
