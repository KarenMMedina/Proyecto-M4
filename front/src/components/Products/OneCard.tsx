import React from "react";

import { IProduct } from "../../interfaces/index";
import Image from "next/image";

export const OneCard: React.FC<IProduct> = ({ name, price, image }) => {
    return (
        <div
      className="
        group 
        relative 
        w-full sm:max-w-[220px] 
        bg-cream 
        rounded-2xl shadow-2xl
        hover:shadow-md 
        transition-shadow 
        duration-300 
        flex flex-col
        overflow-hidden
      "
    >
      <div
        className="w-full flex justify-center items-center p-3 relative"
        style={{ height: 180, minHeight: 180 }}
      >
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="object-contain max-w-full max-h-full"
          style={{ minWidth: 120, minHeight: 120 }}
          priority
        />
        <div
          className="absolute inset-0 bg-redPalette-dark bg-opacity-70 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          See more
        </div>
      </div>
      <div className="px-3 pb-4">
        <h2 className="text-base font-semibold text-redPalette-dark mb-1 truncate">
          {name}
        </h2>
        <p className="text-redPalette-base text-sm font-medium">${price}</p>
      </div>
    </div>
    );
}

export default OneCard;