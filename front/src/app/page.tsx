import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
	return (
		<main className="min-h-screen bg-cream flex flex-col items-center justify-between px-4 py-8">
			<section className="text-center mt-10">
				<h1 className="text-5xl md:text-6xl font-bold text-redPalette-dark mb-4">
					Welcome to iClass
				</h1>
				<p className="text-lg md:text-xl text-redPalette-base max-w-xl mx-auto">
					Choose style, power, and exclusivity. Discover the best Apple products with just a click.
				</p>
				<Link
					href="/Home"
					className="mt-8 inline-block bg-redPalette-base text-black font-semibold py-3 px-6 rounded-full hover:bg-redPalette-dark transition hover:text-white"
				>
					Enter the store
				</Link>
			</section>
			<section className="flex flex-col md:flex-row items-center justify-center gap-10 my-16 max-w-6xl">
				<div className="w-full md:w-1/2 animate-pulse bg-cream/60">
					<Image
						src="/IPhone.png"
						alt="iPhone"
						width={600}
						height={600}
						className="rounded-2xl shadow-xl object-contain"
						priority
					/>
				</div>
				<div className="w-full md:w-1/2 text-redPalette-dark text-left space-y-6">
					<h2 className="text-3xl font-bold">Your new iPhone is waiting for you</h2>
					<p className="text-redPalette-soft text-lg">
						Find recent models, guaranteed quality, and personalized service.
						At iClass, we combine technology and design to give you the best experience.
					</p>
				</div>
			</section>
			<section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
				{[
					{
						title: "Original products",
						desc: "Apple Guarantee and Authenticity on all our products.",
					},
					{
						title: "Fast shipping",
						desc: "To the whole country. Safe deliveries in record time.",
					},
					{
						title: "Personalized attention",
						desc: "Our team will be happy to assist you at all times.",
					},
				].map((item, index) => (
					<div
						key={index}
						className="bg-white rounded-xl shadow-md p-6 text-center border border-redPalette-soft"
					>
						<h3 className="text-xl font-semibold text-redPalette-dark mb-2">{item.title}</h3>
						<p className="text-redPalette-base text-sm">{item.desc}</p>
					</div>
				))}
			</section>
			<footer className="mb-4 text-sm text-redPalette-soft">
				© {new Date().getFullYear()} iClass. All rights reserved.
			</footer>
		</main>
	);
}

export default LandingPage; 