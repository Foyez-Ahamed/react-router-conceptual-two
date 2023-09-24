import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";


const MyCreatedRouter = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/favorite',
                element : <Favorite></Favorite>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])

export default MyCreatedRouter;