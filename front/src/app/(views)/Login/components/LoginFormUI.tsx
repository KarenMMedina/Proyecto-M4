"use client"
import Button from "@/components/Button";
import React from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { postLogin } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import usePublic from "@/hooks/usePublic";

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required to log in'),
    password: yup.string().required("Password is required to log in")
});

export interface IFormData {
    email: string;
    password: string;
}

const LoginFormUI = () => {
    usePublic();
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
                <Form onSubmit={handleSubmit}
                    className="
            max-w-md w-full mx-auto mt-10 
            bg-cream p-8 rounded-xl shadow 
            border border-redPalette-dark
            flex flex-col gap-5">
                    <div className="flex flex-col items-center">
                        <label htmlFor="email" className="text-sm font-semibold text-redPalette-dark">Email: </label>
                        <input type="text" id="email" name="email" value={values.email}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="example@gmail.com"
                            className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm" />
                        <span className="text-red-700 text-sm mt-1">{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="password" className="text-sm font-semibold text-redPalette-dark">Password: </label>
                        <input type="password" id="password" name="password" value={values.password}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="**********" 
                            className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm"  />
                        <span className="text-red-700 text-sm mt-1">{errors.password && touched.password && errors.password}</span>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button type="submit" textContent="Sign in"
                        className="bg-redPalette-base text-black font-medium px-6 py-2 rounded-lg hover:bg-redPalette-dark hover:text-white transition-colors" />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginFormUI;