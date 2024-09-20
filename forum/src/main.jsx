import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from "./App.jsx"

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import axios from "axios";

import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore.js";


axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);
// const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);