import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@material-ui/core";

interface IInputProps{
    // id: string,
    type: "text" | "email" | "password",
    label: string,
    register: UseFormRegisterReturn,
    // placeholder: string,
    error?: FieldError
}

export const Input = ({type, label, register, error}: IInputProps) => {
    return(
        <>
            <TextField id="outlined-required" variant ="outlined" label= { label } type={type} {...register}/>
           {error && <small>{error.message}</small>}
        </>
    )
}
