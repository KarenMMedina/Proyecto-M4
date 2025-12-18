"use client";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const usePrivate = () => {
	const {isAuth} = useAuthContext();
	const router = useRouter();
	
	useEffect(() => {
		if(isAuth === null) {
			return;
		} 
		if (!isAuth) {
			router.push("/Home");
		}
	}, [isAuth, router]);
	return null;
}

export default usePrivate;