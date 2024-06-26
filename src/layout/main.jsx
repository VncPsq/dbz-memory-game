import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApiProvider } from "../contexts/ApiContext";
import App from "./App.jsx";
import Home from "../pages/home/Home";
import Game from "../pages/game/Game";
import { GameProvider } from "../contexts/GameContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <GameProvider>
        <RouterProvider router={router} />
      </GameProvider>
    </ApiProvider>
  </React.StrictMode>
);
