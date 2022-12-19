import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { UserContext } from "../../context/userContext"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Input } from "../Input"

interface iLoginForm{
    email: string,
    password: string,
}

export const LoginForm = () => {

const { loginUser } = useContext(UserContext)

const schemaLogin = yup.object().shape({
    email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
})

const {register, handleSubmit, formState: {errors}} = useForm<iLoginForm>({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin)
})

const submit: SubmitHandler<iLoginForm> = (data) => {
    loginUser(data)
}

    return(
        <form onSubmit={handleSubmit(submit)} noValidate>
            <Input type="email" placeholder="Digite aqui seu email" label="Email" id="email" register={register("email")} error={errors.email} />
            <Input type="password" placeholder="Digite aqui sua senha" label="Senha" id="password" register={register("password")} error={errors.password} />

            <button type="submit">Logar</button>
        </form>
    )
}