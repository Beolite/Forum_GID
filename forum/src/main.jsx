import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePageItems/HomePage";
import App from "./App.jsx"
import LoginPage from "./pages/LoginPageItems/LoginPage.jsx";
import PanduanPage from "./pages/PanduanPage/PanduanPage.jsx";
import RegisterPage from "./pages/LoginPageItems/RegisterPage.jsx";
import ForumPage from "./pages/ForumPageItems/ForumPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/panduan",
    element: <PanduanPage/>,
  },
  {
    path: "/forum",
    element: <ForumPage/>,
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);