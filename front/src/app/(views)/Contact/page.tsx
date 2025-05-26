import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-redPalette-soft text-black py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-redPalette-dark drop-shadow">
          Contact
        </h1>

        <section className="mb-10">
          <p className="text-lg leading-relaxed text-justify">
            If you need assistance with your purchase, have questions about a product, or want to contact our team, we at <span className="font-semibold text-redPalette-base">iClass</span> are here to help.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-redPalette-base mb-2">
            Contact information
          </h2>
          <ul className="text-lg leading-relaxed">
            <li><strong>Email:</strong> soporte@iclass-shop.com</li>
            <li><strong>Phone:</strong> +54 11 3456-7890</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-redPalette-base mb-2">
            Opening hours
          </h2>
          <p className="text-lg leading-relaxed">
            Our business hours are <strong>Monday through Friday, 9:00 a.m. to 6:00 p.m.</strong>. Inquiries outside of business hours will be answered the next business day.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
