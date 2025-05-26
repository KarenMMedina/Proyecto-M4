"use client";
import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/authContext";

const AuthLogin = () => {
  const { isAuth } = useAuthContext();

  if (isAuth) return null;

  return (
    <p className="text-lg font-medium mb-10 leading-relaxed">
      If you are new here, we invite you to{" "}
      <Link href="/Register" className="text-redPallete-dark underline hover:opacity-80">
        register
      </Link>{" "}
      or visit the link in the navigation bar. If you already have an account,{" "}
      <Link href="/Login" className="text-redPallete-dark underline hover:opacity-80">
        log in
      </Link>{" "}
      to start buying whatever you want.
    </p>
  );
};

export default AuthLogin ;
