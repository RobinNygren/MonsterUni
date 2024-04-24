import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { MonstersPage } from "./pages/MonstersPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MonsterPage } from "./pages/MonsterPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MonsterProvider from "./components/Context/MonsterProvider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/monsters",
        element: <MonstersPage />,
        children: [
          {
            path: "/monsters/:monstersId",
            element: <MonsterPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MonsterProvider>
      <RouterProvider router={router} />
    </MonsterProvider>
  </React.StrictMode>
);
