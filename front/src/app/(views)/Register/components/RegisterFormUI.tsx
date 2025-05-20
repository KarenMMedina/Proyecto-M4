"use client"
import Button from "@/components/Button";
import React from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { postRegister } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
                <Form onSubmit={handleSubmit} className="w-[500px] m-auto border-2 flex justify-center flex-col items-center">
                    <div className="flex flex-col items-center">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" value={values.name}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Escribe aqui tu nombre y apellido" className="border-2 rounded-lg px-4 py-2" />
                        <span className="text-red-700">{errors.name && touched.name && errors.name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="address" name="address" value={values.address}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Escribe aqui tu direccion" className="border-2 rounded-lg px-4 py-2" />
                        <span className="text-red-700">{errors.address && touched.address && errors.address}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" id="phone" name="phone" value={values.phone}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="+5493814xxxxxx" className="border-2 rounded-lg px-4 py-2" />
                        <span className="text-red-700">{errors.phone && touched.phone && errors.phone}</span>
                    </div>
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

export default RegisterFormUI;