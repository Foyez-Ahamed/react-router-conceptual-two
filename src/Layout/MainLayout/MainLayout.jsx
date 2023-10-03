import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Toaster/>
            <Navbar></Navbar>
             <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-16 py-5 my-5">
             <Outlet></Outlet>
             </div>
        </div>
    );
};

export default MainLayout;