import React from "react";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
// import listProducts from "@/components/Products/listProducts";
import { redirect } from "next/navigation";
import { getProductById } from "@/services/products";

interface Props {
  params: { slug: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const PageDetailsProducts = async ({ params, searchParams }: Props) => {
  const [idStr, name] = (await params).slug;
  const id = Number(idStr);

  const product = await getProductById(Number(id));

  if (!product) {
    redirect("/404");
  }

  const code = (await searchParams)?.code;
  const r = (await searchParams)?.r;

  return (
    <div>
      <h1>DetailsProducts: {id}</h1>
      <span>code: {code}</span>
      <span>r: {r}</span>
      <ProductDetail {...product} />
    </div>
  );
};

export default PageDetailsProducts;