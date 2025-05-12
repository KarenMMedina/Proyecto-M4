import React, { FC } from "react";
import Navbar from "@/components/Navbar/Navbar";

interface LayoutSecundaryProps {
    children: React.ReactNode;
}

const LayoutSecundary: FC<LayoutSecundaryProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default LayoutSecundary;