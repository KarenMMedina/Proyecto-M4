import AllCards from "@/components/Products/AllCards";
import { getProducts } from "@/services/products";
import Carousel from "./components/Carousel";
import AuthLogin from "./components/AuthLogin";

const getData = async () => {
  const products = await getProducts();

  return {
    products,
  }
};

export default async function Home() {
  const { products } = await getData();
  return (
    <div className="max-w-5xl mx-auto text-center text-black">
      <br />
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
        Welcome to iClass!
      </h1>
      <Carousel />
      <p className="text-lg font-medium mb-6 leading-relaxed">
        Here <span className="text-redPallete-base font-semibold">iClass</span> you&apos;ll find the best selection of Apple products: iPhones, AirPods, accessories, and more—all 100% original.
        We ship nationwide through <span className="font-semibold">Andreani</span>, so your purchase arrives safely and quickly to your doorstep.
      </p>
       <AuthLogin />
      <div className="w-full">
        <AllCards products={products} />
      </div>
    </div>
  );
}
