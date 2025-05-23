"use client";
import { useAuthContext } from "@/context/authContext";
import { IOrder } from "@/interfaces";
import { getUserOrders } from "@/services/orders";
import React, { useEffect, useState } from "react";

const OrdersDetails = () => {
    const { token } = useAuthContext();
    const [orders, setOrders] = useState<IOrder[]>();

    useEffect(() => {
        const request = async () => {
            try {
                const res = await getUserOrders(token!);
                setOrders(res);
            } catch (e: any) {
                console.warn("Error al obtener las ordenes:", e.message);
            }
        };
        if (token) {
            request();
        }
    }, [token]);

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {!orders?.length ? (
                <div className="p-6 text-center text-gray-500 bg-cream border border-redPalette-dark rounded-xl shadow">
                    No tienes órdenes
                </div>
            ) : (
                orders?.map((order) => (
                    <div key={order.id} className="bg-cream border border-redPalette-dark rounded-xl shadow-md p-6">
                        <p className="text-lg font-bold text-redPalette-dark mb-2"><strong>ID de orden:</strong> {order.id}</p>
                        <p className="font-semibold text-redPalette-dark"><strong>Fecha:</strong> {order.date}</p>
                        <p className="font-semibold text-redPalette-dark"><strong>Estado:</strong> {order.status}</p>
                        <p className="mt-2 font-semibold text-redPalette-dark"><strong>Productos:</strong></p>
                        <ul>
                            {order.products.map((product, index) => (
                                <li key={index}>
                                    {product.name} - ${product.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    )
}

export default OrdersDetails;