import { IProduct } from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";

export const ProductDetail: FC<IProduct> = ({ name, description, price, stock, image }) => {
    const getLink = (name: string, id: IProduct["id"]) => {
        return `/DetailsProducts/${id}/${name}`;
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h2>
                <div className="flex justify-center items-center">
                    <Image
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">{description}</p>
                <br />
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">${price}</p>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Stock: {stock}</p>
            </div>
        </div>
    )
}

export default ProductDetail;