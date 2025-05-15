// import Navbar from "@/components/Navbar/Navbar";
import AllCards from "@/components/Products/AllCards";
import { getProducts } from "@/services/products";

const getData = async () => {
	const products = await getProducts();
	
	return {
		products,
	}
};

export default async function Home() {
  const {products} = await getData();
	console.log ("res", products);

  return (
    <>
      {/* <Navbar /> */}
      <br />
      <h1>Bienvenido al Home</h1>
      <br />
      <p>Encontra aqui los productos que buscas, al mejor precio y recibilos en la puerta de casa en menor tiempo.</p>
      <AllCards />
    </>
  );
}
