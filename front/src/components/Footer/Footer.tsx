import React from "react";
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="bg-redPalette-dark text-cream mt-10 rounded-t-xl">
            <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h3 className="text-xl font-bold mb-4">iClass</h3>
                    <p className="mb-2">Premium technology with style.</p>
                    <p>&copy; {new Date().getFullYear()} iClass. All rights reserved.</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3">Useful links</h4>
                    <ul className="space-y-2">
                        <li><a href="/Home" className="hover:underline">Home</a></li>
                        <li><a href="/About" className="hover:underline">About us</a></li>
                        <li><a href="/Contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3">Follow us</h4>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/karenm.medina96?mibextid=JRoKGi" aria-label="Facebook" className="hover:text-redPalette-soft"><FiFacebook size={20} /></a>
                        <a href="https://www.instagram.com/karen_m.medina96?igsh=MXBpbWRmZ3lrc21qZw==" aria-label="Instagram" className="hover:text-redPalette-soft"><FiInstagram size={20} /></a>
                        <a href="https://x.com/karenmedina1151?t=Is1AatrE6BT3MiHh40vR9g&s=09" aria-label="Twitter" className="hover:text-redPalette-soft"><FiTwitter size={20} /></a>
                        <a href="mailto:contacto@iclass.com" aria-label="Correo" className="hover:text-redPalette-soft"><FiMail size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;