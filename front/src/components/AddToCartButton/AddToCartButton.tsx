"use client";
import { useCartContext } from "@/context/cartContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import { IProduct } from "@/interfaces";
import { useAuthContext } from "@/context/authContext";

const AddToCartButton = ({ product }: { product: Pick<IProduct, "id" | "name" | "price" | "image"> }) => {
    const [loading, setLoanding] = useState<boolean>();
    const { addToCart, isProductOnCart, cart } = useCartContext();
    const { isAuth } = useAuthContext();
    const onAddToCart = () => {
        if (!isAuth) {
            toast.error("Debes iniciar sesión o registrarte para añadir productos");
            return;
        }

        setLoanding(true);
        addToCart(product);

        setTimeout(() => {
            setLoanding(false);
            toast.success("Producto añadido al carro")
        }, 1000)
    }

    const productInCart = typeof product.id === "number" && isProductOnCart(product.id);
    const productQty = cart?.filter((item) => item.id === product.id)?.length || 0;

    if (!isAuth) {
        return (
            <Button
                textContent="Añadir a carrito"
                onClick={onAddToCart}
            />
        );
    }

    if (productInCart && productQty >= 1) {
        return <Button textContent="Máximo 1 unidad" disabled />;
    }

    if (loading) {
        return <Button textContent="Loading..." disabled />;
    }

    return (
        <Button textContent="Añadir a carrito" onClick={onAddToCart} />
    );
};

export default AddToCartButton;