"use client"
import Button from "@/components/Button";
import React from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { postRegister } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import usePublic from "@/hooks/usePublic";

const RegisterSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required to register'),
    password: yup.string().required("Password is required to register"),
    name: yup.string().required('Name is required to log register'),
    address: yup.string().required('Address is required to register'),
    phone: yup.string().required('Phone is required to register')
});

export interface FormData {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

const RegisterFormUI = () => {
    usePublic();
    const router = useRouter();

    const HandleOnSubmit = async (values: FormData) => {
        console.log(values);
        try {
            await postRegister(values);
            toast.success("Register Exitoso");

            setTimeout(() => {
                router.push("/Login");
            }, 3000)
        } catch (e: any) {
            console.warn("Error al registrar usuario", e?.message);
            toast.error("Register no completado");
        }
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', name: '', address: '', phone: '' }}
            validationSchema={RegisterSchema}
            onSubmit={HandleOnSubmit}
        >
            {({ isSubmitting, values, handleBlur, handleChange, handleSubmit, errors, touched, }) => (
                <Form onSubmit={handleSubmit} className="
             max-w-md w-full mx-auto mt-10 
             bg-cream p-8 rounded-2xl shadow-2xl 
             flex flex-col gap-5
            ">
                    <div className="flex flex-col items-center">
                        <label htmlFor="name" className="text-sm font-semibold text-redPalette-dark">Name: </label>
                        <input type="text" id="name" name="name" value={values.name}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Tu nombre y apellido"
                            className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm" />
                        <span className="text-red-700 text-xs mt-1">{errors.name && touched.name && errors.name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="address" className="text-sm font-semibold text-redPalette-dark">Address: </label>
                        <input type="text" id="address" name="address" value={values.address}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Tu dirección"
                            className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm" />
                        <span className="text-red-700 text-xs mt-1">{errors.address && touched.address && errors.address}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="phone" className="text-sm font-semibold text-redPalette-dark">Phone: </label>
                        <input type="text" id="phone" name="phone" value={values.phone}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="+549381xxxxxxx"
                            className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm" />
                        <span className="text-red-700 text-xs mt-1">{errors.phone && touched.phone && errors.phone}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="email" className="text-sm font-semibold text-redPalette-dark">Email: </label>
                        <input type="text" id="email" name="email" value={values.email}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="ejemplo@gmail.com"
                            className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm" />
                        <span className="text-red-700 text-xs mt-1">{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="password" className="text-sm font-semibold text-redPalette-dark">Password: </label>
                        <input type="password" id="password" name="password" value={values.password}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="**********" className="border border-redPalette-dark rounded-lg px-4 py-2 text-sm" />
                        <span className="text-red-700 text-xs mt-1">{errors.password && touched.password && errors.password}</span>
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

export default RegisterFormUI;