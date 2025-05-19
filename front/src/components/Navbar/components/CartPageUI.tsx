"use client";
import { useCartContext } from "@/context/cartContext";
import Link from "next/link";
import React from "react";

const CartPageUI = () => {

    const { total } = useCartContext();

    console.log("cart total", total);
    const cartItems = "5";

    return (
        <Link href="/Cart">
            <div className="relative w-10 h-10">
                <span className="text-black font-medium">Cart</span>
                <span className="absolute top-0 right-0 bg-red-500 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center">{cartItems}</span>
            </div>
        </Link>
    )
}

export default CartPageUI;