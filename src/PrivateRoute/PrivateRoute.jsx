import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    // we have to wait here // 
    if(loading){
        return <div className="flex justify-center items-center mt-15"> <span className="loading loading-spinner loading-lg"></span> </div>
    }

    // we have to wait here // 

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;