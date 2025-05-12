import React from "react";

import {IProduct} from "../../interfaces/index";
import Image from "next/image";

export const OneCard: React.FC<IProduct> = ({name, price, image }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">

            <div className="relative w-full h-64"> 
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                />
            </div>

            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {name}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                    ${price}
                </p>
            </div>
        </div>
    );
}

export default OneCard;