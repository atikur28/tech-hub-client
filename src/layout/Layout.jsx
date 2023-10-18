import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetail from "../pages/Home/ProductDetail/ProductDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Apple from "../pages/Home/Brands/Apple/Apple";
import Samsung from "../pages/Home/Brands/Samsung/Samsung";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Sony from "../pages/Home/Brands/Sony/Sony";
import Google from "../pages/Home/Brands/Google/Google";
import Xiaomi from "../pages/Home/Brands/Xiaomi/Xiaomi";
import Dell from "../pages/Home/Brands/Dell/Dell";

const createdRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addproduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateproduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/products/:id",
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/apple",
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/samsung",
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/sony",
                element: <Sony></Sony>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/google",
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/xiaomi",
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/dell",
                element: <Dell></Dell>,
                loader: () => fetch('http://localhost:5000/products')
            },
        ]
    }
])

export default createdRouter;