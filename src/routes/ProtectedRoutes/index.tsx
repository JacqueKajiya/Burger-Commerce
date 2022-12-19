import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoutes = () => {

    const location = useLocation()

    const { user, loading } = useContext(UserContext)

    if(loading){
        return null
    }

    return user ? <Outlet /> : <Navigate to="/" state = {{from: location}}/>
}