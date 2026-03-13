import Layout from "@/pages/Layout/main";
import Login from "@/pages/Login/main";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import Article from "@/pages/Article/main";
import Publish from "@/pages/Publish/main";
import Home from "@/pages/Home/main"
//配置路由实例
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"article",
                element:<Article></Article>
            },
            {
                path:"publish",
                element:<Publish></Publish>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router