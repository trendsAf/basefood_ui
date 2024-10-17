/* eslint-disable no-console */
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const isTokenExpired = (token: any) => {
  if (!token) {
    console.error("Token is not provided");
    return true;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    console.error("Token is not correctly formatted");
    return true;
  }

  try {
    const payload = JSON.parse(atob(parts[1]));
    return payload.exp * 1000 < Date.now();
  } catch (error) {
    console.error("Failed to decode token", error);
    return true;
  }
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = Cookies.get("accessToken");
  const userInfo = Cookies.get("userInfo");

  const tokenExpired = isTokenExpired(accessToken);

  if (tokenExpired) {
    return <Navigate to="/login" replace />;
  }

  if (!accessToken || !userInfo) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
