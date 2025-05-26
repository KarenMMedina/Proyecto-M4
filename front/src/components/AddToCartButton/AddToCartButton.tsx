"use client";
import { useCartContext } from "@/context/cartContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import { CartProduct, IProduct } from "@/interfaces";
import { useAuthContext } from "@/context/authContext";

const AddToCartButton = ({ product }: { product: CartProduct }) => {
    const [loading, setLoanding] = useState<boolean>();
    const { addToCart, isProductOnCart, cart } = useCartContext();
    const { isAuth } = useAuthContext();
    const onAddToCart = () => {
        if (!isAuth) {
            toast.error("You must log in or register to add products.");
            return;
        }

        setLoanding(true);
        addToCart(product);

        setTimeout(() => {
            setLoanding(false);
            toast.success("Product added to cart.")
        }, 1000)
    }

    const productInCart = typeof product.id === "number" && isProductOnCart(product.id);
    const productQty = cart?.filter((item) => item.id === product.id)?.length || 0;

    if (!isAuth) {
        return (
            <Button
                textContent="Add to cart"
                onClick={onAddToCart}
            />
        );
    }

    if (productInCart && productQty >= 1) {
        return <Button textContent="Maximum 1 unit" disabled />;
    }

    if (loading) {
        return <Button textContent="Loading..." disabled />;
    }

    return (
        <Button textContent="Add to cart" onClick={onAddToCart} />
    );
};

export default AddToCartButton;