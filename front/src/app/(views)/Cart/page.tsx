"use client";
import { useCartContext } from "@/context/cartContext";
import React from "react";
import { toast } from "react-toastify";
import CartItem from "./components/CartItem";

export const Cart = () => {
  const { total, cart, removeFromCart } = useCartContext();

  const onTrashClick = (id: number) => {
    toast.success("Producto removido del carrito");
    removeFromCart(id);
  };

  const subtotal = cart
    .reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            onTrashClick={onTrashClick}
          />
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-medium">Envío</span>
          <span>Gratis</span>
        </div>
        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
          Ir a pagar
        </button>
      </div>
    </div>
  );
};


export default Cart;