import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import pftStore from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Goals from "./router/Goals.jsx";
import Investment from "./router/Investment.jsx";
import Saving from "./router/Saving.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/goals",
    element: <Goals />,
  },
  {
    path: "/invest",
    element: <Investment />,
  },
  {
    path: "/savings",
    element: <Saving></Saving>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={pftStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
