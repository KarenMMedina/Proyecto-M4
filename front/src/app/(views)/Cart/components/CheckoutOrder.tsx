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

            toast.success(`Order: #${order.id} created successfully.`);

            resetCart()

            setTimeout(() => {
                router.push("/Profile")
            }, 3000);

        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : "Unknown error";
            console.warn("Ocurrio un error al crear la orden", errorMessage)
            toast.error("An error occurred while registering the order.");
        }
    };

    return (
        <>
            <Button
                disabled={total === 0}
                onClick={onGenerateOrder}
                textContent="Complete purchase"
                className="bg-redPalette-base text-black font-medium px-6 py-2 rounded-lg hover:bg-redPalette-dark hover:text-white transition-colors" />
        </>
    )
}

export default CheckoutOrder;