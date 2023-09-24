import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";
import Phone from "../Components/Phone/Phone";


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
                element : <Phone></Phone>,
                loader : () => fetch('/phones.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])

export default MyCreatedRouter;