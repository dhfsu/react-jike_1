import Layout from "@/pages/Layout/main";
import Login from "@/pages/Login/main";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
//配置路由实例
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router