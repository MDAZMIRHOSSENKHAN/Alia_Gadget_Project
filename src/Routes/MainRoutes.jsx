import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import NotFound from "../pages/static/NotFound";
import AllProducts from "../pages/products/AllProducts";
import SignUp from "../pages/login/SignUp";
import Login from "../pages/login/Login";
import Checkout from "../pages/checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/products/all",
        element: <AllProducts />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default MainRoutes;
