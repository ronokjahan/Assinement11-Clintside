import { useContext } from "react";
import { Authcontext } from "../Login-Regstion/Authprovider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const{user}=useContext(Authcontext)
    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivetRoutes;