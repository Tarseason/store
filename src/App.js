import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import BestSellers from "./components/BestSellers";
import News from "./components/News";
import Accessories from "./components/Accessories";
import RootLayout from "./Pages/Root";
import Favorites from "./Pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/maisvendidos",
        element: <BestSellers />,
      },
      {
        path: "novidades",
        element: <News />,
      },
      {
        path: "acessorios",
        element: <Accessories />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
