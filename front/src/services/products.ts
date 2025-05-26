import { IProduct } from "@/interfaces";
import axios from "axios";

const axiosApiBack = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const response = await axiosApiBack.get("/products");

		if (!response?.data) {
			return [];
		}
		return response.data
	} catch (e) {
		console.error("Ocurrio un error al obtener los productos", e);
		return [];
	}
};

export const getProductById = async (id: number): Promise<IProduct | null> => {
	try {
		const response = await axiosApiBack.get(`/products/${id}`);

		if (!response?.data) {
			return null;
		}
		return response.data
	} catch (e) {
		console.error("Ocurrio un error al obtener el producto", e);
		return null;
	}
};