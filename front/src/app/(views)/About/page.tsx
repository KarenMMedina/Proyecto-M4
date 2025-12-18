const AboutPage = () => {
  return (
    <main className="min-h-screen bg-redPalette-soft text-black py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-redPalette-dark drop-shadow">
          About Us
        </h1>

        <section className="mb-10">
          <p className="text-lg leading-relaxed text-justify">
            At <span className="font-semibold text-redPalette-base">iClass</span>, we are an e-commerce store specializing exclusively in Apple products. Our commitment is to bring you premium, original, and guaranteed technology, from iPhones to the latest accessories like AirPods, chargers, and cases.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-redPalette-base mb-2">
            Why choose us?
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>All our products are 100% original and guaranteed..</li>
            <li>Competitive prices and exclusive promotions.</li>
            <li>Personalized assistance to help you choose the best option for your needs.</li>
            <li>A fast, secure, and easy-to-use website.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-redPalette-base mb-2">
            Reliable shipping
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            We work with{" "}
            <span className="font-semibold text-redPalette-dark">Andreani</span> to offer you a reliable and efficient logistics service throughout the country. Whether you&apos;re in Buenos Aires, Córdoba, or the south of the country, we&apos;ll deliver your purchases to your doorstep with real-time tracking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-redPalette-base mb-2">
            Our goal
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            We want you to experience the Apple experience with the peace of mind of shopping at a store that cares about every detail. At iClass, we don&apos;t just sell products; we offer trust, commitment, and a community passionate about quality technology.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
