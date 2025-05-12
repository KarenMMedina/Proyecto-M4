import React, { FC } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface LayoutSecundaryProps {
    children: React.ReactNode;
}

const LayoutSecundary: FC<LayoutSecundaryProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default LayoutSecundary;