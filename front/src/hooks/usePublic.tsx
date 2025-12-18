"use client";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const usePublic = () => {
	const {isAuth} = useAuthContext();
	const router = useRouter();
	
	useEffect(() => {
		if (isAuth) {
			router.push("/Home");
		}
	}, [isAuth, router]);
	return null;
};

export default usePublic;