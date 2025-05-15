"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "@/services/products";
import { IProduct } from "@/interfaces";

import OneCard from "./OneCard";

export const AllCards: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchProducts();
    }, []);

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