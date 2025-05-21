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
        <>
            {!orders?.length ? (
                <div className="p-4 text-center text-gray-500 dark:text-gray-300">
                    No tienes órdenes
                </div>
            ) : (
                orders?.map((order) => (
                    <div key={order.id}>
                        <p><strong>ID de orden:</strong> {order.id}</p>
                        <p><strong>Fecha:</strong> {order.date}</p>
                        <p><strong>Estado:</strong> {order.status}</p>
                        <p><strong>Productos:</strong></p>
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
        </>
    )
}

export default OrdersDetails;