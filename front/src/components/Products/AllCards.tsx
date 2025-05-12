import React from "react";
import Link from "next/link";

import OneCard from "./OneCard";
import listProducts from "./listProducts";

export const AllCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {listProducts.map((product, index) => {
                const link = `/DetailsProducts/${product.id}/${product.name}`;
                return (
                    <Link key={index} href={link}>
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