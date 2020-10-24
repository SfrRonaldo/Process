import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/index";
import Home from "./routes/Home/index";
import Login from "./routes/Login/index";
import MainLayout from "./layouts/MainLayout/index";
import NotFound from "./routes/NotFound/index";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
