 import ProductOview from "../Views/ProductView"
 import * as React from "react";
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/:productID",
      element: <ProductOview />,
    },
  ]);
  return (
    // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
  );
}

export default Router;