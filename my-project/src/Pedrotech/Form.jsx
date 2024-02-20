import React from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const Form = () => {

    const schema = yup.object().shape({
        fullName:yup.string().required("Your full name is required"),
        email:yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(12).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
         resolver: yupResolver(schema),
    });

    const onSubmit =(data)=>{
        console.log(data);
    }

  return (
    <div>Sankalpa Dahal
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Your name...' {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
            <br />
            <input type="text" placeholder='Email' {...register("email")} /><br />
            <input type="number" placeholder='Age'{...register("age")} /><br />
            <input type="password" placeholder='Password' {...register("password")} /><br />
            <input type="password" placeholder='ConfirmPassword' {...register("confirmPassword")} /><br />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form