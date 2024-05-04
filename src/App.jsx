// react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// context
import { useContext } from "react";
import { GlobalContext } from "./context/useGlobal";

// layouts
import MainLayout from "./layouts/MainLayout";

// components
import ProtectedRoutes from "./components/ProtectedRoutes";


// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default function App() {
  const { user }  = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <SignUp />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
