import { IProduct } from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export const ProductDetail: FC<IProduct> = ({ id, name, description, price, stock, image }) => {
    const getLink = (name: string, id: IProduct["id"]) => {
        return `/DetailsProducts/${id}/${name}`;
    };

    return (
        <div className="
            w-full max-w-md 
            bg-cream 
            border border-redPalette-dark 
            rounded-xl 
            shadow 
            hover:shadow-md 
            transition-shadow 
            duration-300 
            flex flex-col 
            overflow-hidden 
            mx-auto
        ">
            <div className="px-6 pb-6 text-center">
                <h2 className="text-xl font-bold text-redPalette-dark mb-2 my-4">{name}</h2>
                <div className="w-full flex justify-center items-center p-4 relative"
                    style={{ height: 250, minHeight: 250 }}>
                    <Image
                        src={image}
                        alt={name}
                        width={220}
                        height={220}
                        className="object-contain max-w-full max-h-full"
                        style={{ minWidth: 150, minHeight: 150 }}
                        priority
                    />
                </div>
                <div className="text-black text-sm mb-4">
                    <p className="font-semibold">{description}</p>
                </div>
                <br />
                <div className="flex flex-col gap-2 text-sm text-redPalette-base">
                    <p className="font-semibold text-redPalette-dark">Precio: ${price}</p>
                    <p className="font-semibold text-redPalette-dark">Stock disponible: {stock}</p>
                </div>
                <div className="mt-5">
                    {typeof id === "number" && (
                        <AddToCartButton product={{ id, name, price, image }} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;