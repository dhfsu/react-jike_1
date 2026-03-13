//有Token则跳转，否则不跳

import { getToken } from "@/utils/main";
import { Navigate } from "react-router-dom";
export const AuthRoute = ({ children}) => {
    const token =getToken()
    if(token){
        return <>{children}</>
    }else{
        return < Navigate to={"/login"} replace />
    }
}