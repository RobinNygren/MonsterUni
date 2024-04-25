import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { MonstersPage } from "./pages/MonstersPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MonsterPage } from "./pages/MonsterPage";
import { EditMonsters } from "./pages/EditMonsters";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import AddMonster from "./pages/AddMonster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "monsters",
        element: <MonstersPage />,
        children: [
          {
            path: ":monsterId",
            element: <MonsterPage />,
          },
        ],
      },
      {
        path: "add-monster",
        element: <AddMonster />,
      },
      {
        path: "edit-monster",
        element: <EditMonsters />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);
