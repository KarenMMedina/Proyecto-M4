import AllCards from "@/components/Products/AllCards";
import { getProducts } from "@/services/products";

const getData = async () => {
  const products = await getProducts();

  return {
    products,
  }
};

export default async function Home() {
  const { products } = await getData();
  console.log("res", products);

  return (
    <div className="max-w-5xl mx-auto text-center text-black">
      <br />
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
        ¡Bienvenido al Home!
      </h1>
      <p className="text-lg font-medium mb-10 leading-relaxed">
        Encontrá aquí los productos que buscás, al mejor precio, y recibilos en la puerta de casa en el menor tiempo posible.
      </p>
      <div className="w-full">
        <AllCards products={products} />
      </div>
    </div>
  );
}
