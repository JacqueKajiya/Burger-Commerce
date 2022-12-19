import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps{
    id: string,
    type: "text" | "email" | "password",
    label: string,
    register: UseFormRegisterReturn,
    placeholder: string,
    error?: FieldError
}

export const Input = ({type, id, label, register, placeholder, error}: IInputProps) => {
    return(
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input type= {type} id={id} placeholder={placeholder} {...register} />
            {error && <span>{error.message}</span>}
        </fieldset>
    )
}
