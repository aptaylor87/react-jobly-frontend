import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Components/Auth/UserContext";

function ProtectedRoute({ isAllowed, redirectTo = "/landing", children }) {
  if (!isAllowed) {
   return <Navigate to={redirectTo} />
  }
  return children ? children : <Outlet />
 }

export default ProtectedRoute;