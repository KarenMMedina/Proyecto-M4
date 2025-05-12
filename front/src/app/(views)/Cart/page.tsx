import React from "react";

export const Cart = () => {
    const cartItems = [
    {
      id: 1,
      name: "iPhone 11",
      image: "https://purepng.com/public/uploads/large/smartphone-iphone-11-pro-max-silver-san.png",
      price: 699,
      quantity: 1,
    },
    {
      id: 2,
      name: "Apple Watch Series 6",
      image: "https://cdn-ipoint.waugi.com.ar/img/cms/landings-fichas/Watch/Watch%20Series%206/RX-S3_Smart_1-2-2.png",
      price: 399,
      quantity: 1,
    },
  ];

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
      
      {/* Lista de productos */}
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border rounded-lg p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 border rounded">−</button>
              <span>{item.quantity}</span>
              <button className="px-2 py-1 border rounded">+</button>
            </div>
            <button className="ml-4 text-red-500">Eliminar</button>
          </div>
        ))}
      </div>

      {/* Resumen del pedido */}
      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-medium">Envío</span>
          <span>Gratis</span>
        </div>
        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
          Ir a pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;