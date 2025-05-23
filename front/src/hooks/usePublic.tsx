"use client";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const usePublic = () => {
	const {isAuth} = useAuthContext();
	const router = useRouter();
	
	useEffect(() => {
		isAuth && router.push("/")
	}, [isAuth]);
	return null;
};

export default usePublic;