import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Devis from "./pages/Devis/Devis";
import App from "./App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/Devis",
          element: <Devis />,
        },
      ],
    },
  ]);
  