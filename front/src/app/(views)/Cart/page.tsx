import React from "react";
import CartClient from "./components/CartClient";
import Image from "next/image";
import Link from "next/link";

export const Cart = () => {
  return (
     <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-row gap-12 items-start">
        <div className="flex flex-col items-start w-[400px]">
          <Image
            src="/Cart.png"
            alt="Carrito de compras"
            width={400}
            height={400}
            className="object-contain"
            priority
          />

          <div className="mt-6 space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              Revisá tu pedido antes de finalizar la compra. Si necesitás hacer cambios, podés eliminarlos desde aquí.
            </p>
            <p>
              Si querés seguir comprando,{" "}
              <Link href="/Home" className="text-black hover:underline font-semibold">
                hacé click aquí
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex-1">
          <CartClient />
        </div>
      </div>
    </div>
  );
}


export default Cart;