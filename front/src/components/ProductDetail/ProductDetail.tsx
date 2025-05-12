import IProduct from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";

export const ProductDetail: FC<IProduct> = ({ id, name, description, price, stock, image }) => {
    const getLink = (name: string, id: IProduct["id"]) => {
        return `/DetailsProducts/${id}/${name}`;
    };

    return (
        <>
            <h3>{id}</h3>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <Image src={image} alt="Producto aleatorio" width={400} height={300}></Image>
        </>
    )
}

export default ProductDetail;