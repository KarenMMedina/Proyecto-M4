"use client";

import { CartProduct, IProduct } from "@/interfaces";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";

interface CartContextType {
    total: number;
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (id: number) => void;
    resetCart: () => void;
    isProductOnCart: (id: number) => boolean;
    checkOutLoader?: boolean;
    toggleLoaderCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [total, setTotal] = useState<CartContextType["total"]>();
    const { user, isAuth } = useAuthContext();

    const [checkOutLoader, setcheckOutLoader] = useState<boolean | undefined>();


    const addToCart = (product: CartProduct) => {
        if (
            typeof product.id !== "number" ||
            typeof product.name !== "string" ||
            typeof product.image !== "string" ||
            typeof product.price !== "number"
        ) {
            console.warn("❌ Producto incompleto, no se agregó al carrito:", product);
            return;
        }

        setCart((prevCart) => {
            const cart = prevCart || [];
            const exists = cart.some((p) => p.id === product.id);
            if (exists) return cart;

            return [...cart, product];
        });

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
        setCart([]);
        setTotal(0);
    };

    const isProductOnCart = (productId: number) => {
        return Boolean(cart?.find((p) => p.id === productId))
    }

    const toggleLoaderCheckout = () => {
        setcheckOutLoader((state) => !state)
    }

    useEffect(() => {
        resetCart();
    }, [user]);


    useEffect(() => {
        if (!cart) {
            return;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total", total?.toString() || "0")
    }, [cart, total]);

    useEffect(() => {
        const localCart = localStorage.getItem("cart");
        const localTotal = localStorage.getItem("total");

        if (!localCart) {
            return setCart([])
        }
        setCart(JSON.parse(localCart));
        setTotal(Number(localTotal));
    }, []);

    return (
        <CartContext.Provider value={{
            cart: cart || [],
            total: total || 0,
            addToCart,
            removeFromCart,
            resetCart,
            isProductOnCart,
            checkOutLoader,
            toggleLoaderCheckout
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