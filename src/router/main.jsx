import Layout from "@/pages/Layout/main";
import Login from "@/pages/Login/main";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
// import Article from "@/pages/Article/main";
// import Publish from "@/pages/Publish/main";
// import Home from "@/pages/Home/main"
import { lazy, Suspense } from "react";
//配置路由实例

const Home =lazy(()=>import("@/pages/Home/main"))
const Article =lazy(()=>import("@/pages/Article/main"))
const Publish =lazy(()=>import("@/pages/Publish/main"))
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,
        children:[
            {
                index:true,
                element:<Suspense fallback={'加载中'}><Home /></Suspense>
            },
            {
                path:"article",
                element:<Suspense fallback={'加载中'}><Article /></Suspense>
            },
            {
                path:"publish",
                element:<Suspense fallback={'加载中'}><Publish /></Suspense>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router