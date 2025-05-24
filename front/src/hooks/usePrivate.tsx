"use client";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const usePrivate = () => {
	const {isAuth} = useAuthContext();
	const router = useRouter();
	
	useEffect(() => {
		if(isAuth === null) {
			return;
		} 
		!isAuth && router.push("/Home")
	}, [isAuth]);
	return null;
}

export default usePrivate;