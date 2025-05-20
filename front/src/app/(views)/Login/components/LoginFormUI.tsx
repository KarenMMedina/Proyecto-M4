"use client"
import Button from "@/components/Button";
import React from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { postLogin } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required to log in'),
    password: yup.string().required("Password is required to log in")
});

export interface IFormData {
    email: string;
    password: string;
}

const LoginFormUI = () => {
    const router = useRouter(); 
    const { saveUserData } = useAuthContext();

    const HandleOnSubmit = async (values: IFormData) => {
        console.log(values);
        try {
            const res = await postLogin(values);
            console.log("res login");

            saveUserData({ user: res.user, token: res.token });
            
            toast.success("Login Exitoso");
            setTimeout(() => {
                router.push("/");
            }, 3000)
        } catch (e: any) {
            console.warn("Error al loguear usuario", e?.message);
            toast.error("Login no completado");
        }
    }

    return (
        <Formik
            initialValues={{ email: "lucialopez10@example.com", password: "Hola123!" }}
            // {{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={HandleOnSubmit}
        >
            {({ isSubmitting, values, handleBlur, handleChange, handleSubmit, errors, touched, }) => (
                <Form onSubmit={handleSubmit} className="w-[500px] m-auto border-2 flex justify-center flex-col items-center">
                    <div className="flex flex-col items-center">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" value={values.email}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="example@gmail.com" className="border-2 rounded-lg px-4 py-2" />
                        <span className="text-red-700">{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" value={values.password}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="**********" className="border-2 rounded-lg px-4 py-2" />
                        <span className="text-red-700">{errors.password && touched.password && errors.password}</span>
                    </div>
                    <div className="flex flex-col">
                        <Button type="submit" textContent="Sign in" className="bg-black text-white rounded-lg px-4 py-2" />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginFormUI;