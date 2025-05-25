import React from "react";

interface CartItemProps {
    id: number;
    name: string;
    image: string;
    price: number;
    onTrashClick: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, image, price, onTrashClick }) => {
    return (
        <div className="flex items-center border rounded-lg p-4">
            <img
                src={image}
                alt={name}
                className="w-20 h-20 object-contain rounded bg-cream"
            />
            <div className="ml-4 flex-1">
                <h2 className="font-medium">{name}</h2>
                <p className="text-gray-600">
                    ${typeof price === "number" ? price.toFixed(2) : "0.00"}
                </p>
            </div>
            <button
                onClick={() => onTrashClick(id)}
                className="ml-4 text-red-500"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;