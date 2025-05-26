import React from "react";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { redirect } from "next/navigation";
import { getProductById } from "@/services/products";
import Link from "next/link";

interface Props {
  params: { slug: string[] };
}

const PageDetailsProducts = async ({ params }: Props) => {
  const [idStr] = params.slug;
  const id = Number(idStr);

  const product = await getProductById(Number(id));

  if (!product) {
    redirect("/404");
  }

  return (
    <div className="min-h-screen bg-redPalette-soft bg-[url('/Fondos.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-start gap-10">
        <div className="max-w-md text-gray-800">
          <h1 className="text-xl font-semibold mb-4">
            Read the product details and add it to your cart to continue with your purchase.
          </h1>
          <br />
          <h2>Your product is identified with the number: {id}</h2>
          <br />
          <p className="mb-2">
            If you want to continue shopping,{" "}
            <Link href="/Home" className="text-black hover:underline font-semibold">
              click here
            </Link>
            .
          </p>
          <br />
          <p>
            To complete your order,{" "}
            <Link href="/Cart" className="text-black hover:underline font-semibold">
              go to your cart
            </Link>
            .
          </p>
        </div>
        <div className="flex-1">
          <ProductDetail {...product} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default PageDetailsProducts;