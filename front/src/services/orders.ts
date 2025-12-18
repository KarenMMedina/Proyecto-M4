"use server";
import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export interface OrderDto {
  userId: number;
  products: number[];
}

export const postOrder = async (data: OrderDto, token: string) => {
  try {
    const res = await axiosApiBack.post("/orders", data, {
      headers: {
        authorization: token,
      },
    });

    return res.data;
  } catch (e) {
    const error = e as Error;
    console.error("Error en la orden generada", error.message);
    throw Error("ERROR_POST_ORDER");
  }
};

export const getUserOrders = async (token: string) => {
  try {
    const res = await axiosApiBack.get("/users/orders", {
      headers: {
        authorization: token,
      },
    });

    return res.data;
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    console.error("Error en la orden generada", errorMessage);
    throw Error("ERROR_GET_ORDERS");
  }
};