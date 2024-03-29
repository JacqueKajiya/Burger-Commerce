import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<h1>Error</h1>} />
        </Routes>
    )
}