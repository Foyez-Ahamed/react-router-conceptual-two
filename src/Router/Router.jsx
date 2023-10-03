import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";
import Phone from "../Components/Phone/Phone";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const MyCreatedRouter = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/phones.json')
            },
            {
                path : '/favorite',
                element : <Favorite></Favorite>
            },
            {
                path : '/phone/:id',
                element : <PrivateRoute><Phone></Phone></PrivateRoute>,
                loader : () => fetch('/phones.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },

            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default MyCreatedRouter;