import { createHashRouter } from "react-router-dom";
import { Parking } from "./app/components/projets/Parking";
import { Ecommerce } from "./app/components/projets/Ecommerce";
import Home from "./Pages/Home";

export const router = createHashRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "ecommerce", Component: Ecommerce },
      { path: "parking", Component: Parking },
    ],
  },
]);