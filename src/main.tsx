import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./pages/App.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Welcome } from "./pages/Welcome.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <NotFound />,
  },
  {
    path: "/budget",
    element: (
      <AppProvider>
        <App />
      </AppProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
