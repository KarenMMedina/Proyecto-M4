import React from "react";
import navbarLinks from "@/constants/navbar";
import NavItem from "./NavItem";
import AuthNav from "./components/AuthNavbar";

const Navbar = () => {
    return (
        <nav className="bg-cream/90 shadow-lg backdrop-blur-md rounded-xl mx-4 mt-4">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
                <a href="/Home" className="flex items-center space-x-3">
                    <img src="/logo-Iclass.png" className="h-14" alt="iClass Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                        iClass
                    </span>
                </a>
                <div className="flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        {navbarLinks.map((navLink, index) => (
                            <NavItem key={index} {...navLink} />
                        ))}
                    </ul>
                    <AuthNav />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;