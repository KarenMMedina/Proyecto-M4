import React from "react";
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="bg-redPalette-dark text-cream mt-10 rounded-t-xl">
            <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h3 className="text-xl font-bold mb-4">iClass</h3>
                    <p className="mb-2">Tecnología premium con estilo.</p>
                    <p>&copy; {new Date().getFullYear()} iClass. Todos los derechos reservados.</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3">Enlaces útiles</h4>
                    <ul className="space-y-2">
                        <li><a href="/Home" className="hover:underline">Inicio</a></li>
                        <li><a href="/products" className="hover:underline">Productos</a></li>
                        <li><a href="/about" className="hover:underline">Sobre nosotros</a></li>
                        <li><a href="/contact" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3">Seguinos</h4>
                    <div className="flex gap-4">
                        <a href="#" aria-label="Facebook" className="hover:text-redPalette-soft"><FiFacebook size={20} /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-redPalette-soft"><FiInstagram size={20} /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-redPalette-soft"><FiTwitter size={20} /></a>
                        <a href="mailto:contacto@iclass.com" aria-label="Correo" className="hover:text-redPalette-soft"><FiMail size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;