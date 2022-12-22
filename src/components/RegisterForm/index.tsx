import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { UserContext } from "../../context/userContext"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Input } from "../Input"
import { StyledRegisterForm } from "./style"

interface iRegisterForm{
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

export const RegisterForm = () => {
    
    const { registerUser } = useContext(UserContext)

    const schemaRegister = yup.object().shape({
        name: yup.string().required("Digite seu nome"),
        email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
        password: yup.string().required("Senha é obrigatória").min(6, "Coloque no mínimo 6 caracteres"),
        confirmPassword: yup.string().required("Confirme sua senha")
        .oneOf([yup.ref("password")], "A confirmação não corresponde a senha digitada")
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm<iRegisterForm>({
        mode: "onBlur",
        resolver: yupResolver(schemaRegister)
    })
    
    const submit: SubmitHandler<iRegisterForm> = (data) => {
        registerUser(data)
    }
    
        return(
            <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
                <Input type="text"  label="Nome" register={register("name")} error={errors.name} />
                <Input type="email"  label="Email"  register={register("email")} error={errors.email} />
                <Input type="password"  label="Senha" register={register("password")} error={errors.password} />
                <Input type="password"  label="Confirmação de senha"  register={register("confirmPassword")} error={errors.confirmPassword} />
    
                <button type="submit">Cadastrar</button>
            </StyledRegisterForm>
        )
    }