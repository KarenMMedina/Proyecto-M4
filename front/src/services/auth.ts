"use server"
import axios from "axios";
import { FormData } from "@/app/(views)/Register/components/RegisterFormUI";
import { IFormData } from "@/app/(views)/Login/components/LoginFormUI";

const axiosApiBack = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const postRegister = async (data: FormData) => {  
	try{
		await axiosApiBack.post("/users/register", data);
		
		return "SUCCESS_REGISTER";
		
	}catch(e){
		console.error("Ocurrio un error al registrarse", e);
		throw Error("ERROR_REGISTER");
	}
}

export const postLogin = async (data: IFormData) => {  
	try{
		const res = await axiosApiBack.post("/users/login", data);
		
		return res.data
		
	}catch(e){
		console.error("Ocurrio un error al loguearse", e);
		throw Error("ERROR_LOGIN");
	}
}