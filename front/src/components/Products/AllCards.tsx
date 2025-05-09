import React from "react";

import OneCard from "./OneCard";
import listProducts from "./listProducts";

export const AllCards: React.FC = () => {
    return (
        <div>
            {listProducts.map((product, index) => {
                return <OneCard key={index} id={product.id} name={product.name} description={product.description} price={product.price} stock={product.stock} images={product.image} />
            })}
        </div>
    )
}

export default AllCards;