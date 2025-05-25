import React from "react";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { redirect } from "next/navigation";
import { getProductById } from "@/services/products";

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
    <div>
      <h1>DetailsProducts: {id}</h1>
      <ProductDetail {...product} />
    </div>
  );
};

export default PageDetailsProducts;