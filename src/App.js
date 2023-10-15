import Nav from "./Components/Navbar/nav";
import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "jquery/dist/jquery.min.js";
// import "popper.js/dist/umd/popper.min.js";

import MainPage from "./Pages/MainPage";
import RootLayOut from "./Pages/Root";
import Category from "./Pages/Category-pages/Category";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          path: "",
          element: <MainPage />,
        },
        {
          path: "/category/:productId",
          element: <Category />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
