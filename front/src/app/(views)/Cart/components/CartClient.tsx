"use client";
import React from "react";
import { useCartContext } from "@/context/cartContext";
import { toast } from "react-toastify";
import CartItem from "./CartItem";
import CheckoutOrder from "./CheckoutOrder";


const CartClient = () => {
  const { total, cart, removeFromCart, checkOutLoader } = useCartContext();

  const onTrashClick = (id: number) => {
    toast.success("Producto removido del carrito");
    removeFromCart(id);
  };

  const subtotal = cart
    .reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  if (checkOutLoader) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-cream dark:bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-8">Tu Carrito</h1>

      <div className="space-y-4 mb-8">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No hay productos en el carrito.
          </p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              onTrashClick={onTrashClick}
            />
          ))
        )}
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
        <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Envío</span>
          <span>Gratis</span>
        </div>
        <div className="flex justify-between text-xl font-bold mb-6 text-black dark:text-white">
          <span>Total</span>
          <span>${subtotal}</span>
        </div >
        <div className="flex justify-center mt-4"> 
          <CheckoutOrder />
        </div>
      </div>
    </div>
  );
};

export default CartClient;