import Button from "@/components/Button";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { OrderDto, postOrder } from "@/services/orders";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const CheckoutOrder = () => {
    const { total, toggleLoaderCheckout, cart, resetCart } = useCartContext();
    const { user, token } = useAuthContext();
    const router = useRouter();

    const onGenerateOrder = async () => {
        try {
            toggleLoaderCheckout();

            if (!user) {
                return;
            }

            const data: OrderDto = {
                userId: user.id,
                products: cart.map((product) => product.id as number),
            }

            const order = await postOrder(data, token || "");

            toast.success(`Orden: #${order.id} creada existosamente`);

            resetCart()

            setTimeout(() => {
                router.push("/Profile")
            }, 3000);

        } catch (e) {
            console.warn("Ocurrio un error al crear la orden", e)

            toast.error("Ocurrio un eror al registrar la orden");
        }
    };

    return (
        <>
            <Button
                disabled={total === 0}
                onClick={onGenerateOrder}
                textContent="Finalizar compra"
                className="bg-redPalette-base text-black font-medium px-6 py-2 rounded-lg hover:bg-redPalette-dark hover:text-white transition-colors"  />
        </>
    )
}

export default CheckoutOrder;