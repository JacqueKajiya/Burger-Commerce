import React from "react";
import { useState, useEffect, createContext } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";

import { api } from "../services/api";

interface iUserContextProps{
    children: React.ReactNode,
}

interface iUserData{
   email: string,
   password: string,
}

interface iUserAutoLogin{
    email: string,
    password: string,
    name: string,
    id: number,
}

interface iUserNewData{
    email: string,
    password: string,
    name: string,
}

interface iUserContextValue{
    loading: boolean,
    user: iUserAutoLogin | null,
    loginUser: (data : iUserData) => void,
    registerUser: (data: iUserNewData) => void,
    logOut: () => void,
}

export const UserContext = createContext({} as iUserContextValue)

export const UserProvider = ({ children } : iUserContextProps) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<iUserAutoLogin | null>(null)
    
    const location = useLocation()
    const navigate = useNavigate()

    const token = localStorage.getItem("@token")
    const userId = localStorage.getItem("@userId")

    useEffect  (() => {
        const loadUser = async () =>{
            if(token){

                try{
                    api.defaults.headers.common.authorization = `Bearer ${token}`
                    const response = await api.get<iUserAutoLogin>(`users/${userId}`)
                    
                    setUser(response.data)
                    navigate("/dashboard")
                }
                catch (error){
                    console.error(error)
                }finally{
                    setLoading(false)
                }
            }}

            loadUser()
        }, [])

    const loginUser = async (data : iUserData) =>{
        try {
            setLoading(true)
            const response = await api.post("login", data)

            localStorage.setItem("@token", response.data.accessToken)
            localStorage.setItem("@userId", response.data.user.id)

            setUser(response.data)

            const toNavigate = location.state?.from?.pathname || "/dashboard"
            navigate(toNavigate, {replace : true })

            toast.success("Usuário logado com sucesso!")

        } catch (error) {
            console.error(error)
            toast.error("Ops, algo deu errado!")

        }finally{
            setLoading(false)
        }
    }

    const registerUser = async (data : iUserNewData) =>{
        try {
            setLoading(true)
            const response = await api.post("users", data)

            toast.success("Usuário cadastrado com sucesso!")
            navigate("/")

        } catch (error) {
            console.error(error)
            toast.error("Ops, algo deu errado!")
        }finally{
            setLoading(false)
        }
    }

    const logOut = () =>{
        localStorage.clear()
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ loading, loginUser, user, registerUser, logOut}}>
            {children}
        </UserContext.Provider>
    )

}