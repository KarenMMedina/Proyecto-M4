"use client";
import { useCartContext } from "@/context/cartContext";
import Link from "next/link";
import React from "react";

const CartPageUI = () => {

    const { total } = useCartContext();

    // console.log("cart total", total);
    // const cartItems = "5";

    return (
        <Link href="/Cart" className="relative flex items-center px-3 rounded-md text-black font-medium transition-colors duration-200 hover:bg-redPalette-soft hover:text-cream">
            <div>
                <span>Cart</span>
                <span className="ml-1 absolute -top-1 -right-3 bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{total}</span>
            </div>
        </Link>
    )
}

export default CartPageUI;