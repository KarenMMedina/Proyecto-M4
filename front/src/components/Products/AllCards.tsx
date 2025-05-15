import React from "react";
import Link from "next/link";
import { IProduct } from "@/interfaces";

import OneCard from "./OneCard";

interface AllCardsProps {
    products: IProduct[]
}

export const AllCards: React.FC <AllCardsProps> = ({products}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product)  => {
                const link = `/DetailsProducts/${product.id}/${product.name}`;
                return (
                    <Link key={product.id} href={link}>
                            <OneCard
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                stock={product.stock}
                                image={product.image}
                            />
                    </Link>
                );
            })}
        </div>
    )
}

export default AllCards;