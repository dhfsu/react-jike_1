import { request } from "@/utils/main"
import { useEffect } from "react"
const Layout = () => {
    useEffect(() => {
        request.get('/user/profile')
    },[])
    return (
        <div>
            this is layout
        </div>
    )
}

export default Layout