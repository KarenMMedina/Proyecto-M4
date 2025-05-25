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
        {/* Texto informativo */}
        <div className="max-w-md text-gray-800">
          <h1 className="text-xl font-semibold mb-4">
            Lee los detalles del producto y agrégalo al carrito para continuar con tu compra.
          </h1>
          <br />
          <h2>Tu producto está identificado con el número: {id}</h2>
          <br />
          <p className="mb-2">
            Si deseas seguir comprando,{" "}
            <Link href="/Home" className="text-black hover:underline font-semibold">
              hacé clic aquí
            </Link>
            .
          </p>
          <br />
          <p>
            Para finalizar tu pedido,{" "}
            <Link href="/Cart" className="text-black hover:underline font-semibold">
              ve a tu carrito
            </Link>
            .
          </p>
        </div>

        {/* Componente de detalle */}
        <div className="flex-1">
          <ProductDetail {...product} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default PageDetailsProducts;