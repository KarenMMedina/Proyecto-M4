import Link from "next/link";
import React from "react";

export const Page404 = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-soft px-4">
            <div className="text-center bg-cream rounded-2xl shadow-2xl  p-10">
                <h1 className="text-6xl font-bold text-redPalette-dark mb-4">404</h1>
                <h2 className="text-2xl text-black font-semibold mb-2">Página no encontrada</h2>
                <p className="text-redPalette-dark mb-6">
                    Lo sentimos, la página que estás buscando no existe o fue movida.
                </p>
                <Link
                    href="/Home"
                    className="inline-block px-6 py-2 bg-redPalette-soft text-black rounded-md shadow-md transition hover:bg-redPalette-dark hover:text-white"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default Page404;