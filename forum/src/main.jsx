import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
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
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import axios from "axios";

axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);