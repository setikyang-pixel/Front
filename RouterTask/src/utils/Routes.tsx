import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Layout from "../pages/Layout";
import AddProduct from "../pages/AddProduct";
import ProductsDetails from "../pages/ProductsDetails";
import NotFound from "../pages/NotFound";

export const Routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
        { path: "/products", element: <Products /> },
        { path: "/product/:id", element: <ProductsDetails /> },
      { path: "/add", element: <AddProduct /> },
    ],
  },
  {path :"*",element : <NotFound/>}
]);
