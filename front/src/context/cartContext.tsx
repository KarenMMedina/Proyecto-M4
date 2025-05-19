"use client";

import { IProduct } from "@/interfaces";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    total: number;
    cart: any[];
    addToCart: (product: Partial<IProduct>) => void;
    removeFromCart: (id: number) => void;
    resetCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartContextType["cart"] | undefined>();
    const [total, setTotal] = useState<CartContextType["total"]>();

    const addToCart = (product: Partial<IProduct>) => {
        setCart((prevCart) => [...(prevCart || []), product]);
        setTotal((prevTotal) => (prevTotal || 0) + 1);
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart?.filter((p) => p.id !== id));
        setTotal((prevTotal) => {
            if (prevTotal === 0 || !prevTotal) {
                return 0;
            }
            return prevTotal - 1;
        })
    };

    const resetCart = () => {
        setTimeout(() => {
            setCart([]);
            setTotal(0);
        }, 3000)
    };

    return (
        <CartContext.Provider value={{
            cart: cart || [],
            total: total || 0,
            addToCart,
            removeFromCart,
            resetCart,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }

    return context;
};