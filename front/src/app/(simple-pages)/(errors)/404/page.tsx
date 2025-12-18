import Link from "next/link";

const Page404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soft px-4">
      <div className="text-center bg-cream rounded-2xl shadow-2xl  p-10">
        <h1 className="text-6xl font-bold text-redPalette-dark mb-4">404</h1>
        <h2 className="text-2xl text-black font-semibold mb-2">
          Page not found
        </h2>
        <p className="text-redPalette-dark mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/Home"
          className="inline-block px-6 py-2 bg-redPalette-soft text-black rounded-md shadow-md transition hover:bg-redPalette-dark hover:text-white"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;