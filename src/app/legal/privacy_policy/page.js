import React from "react";

function Page() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="min-h-screen flex items-center justify-center relative w-full"
        style={{
          backgroundImage: "url('/PrivacySlide.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50" />

        <div
          className="relative z-10 text-white text-left w-full max-w-3xl p-6 md:me-120"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mb-4">
            Techno Communications <br /> Global Pvt Ltd&#39;s
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Legal /Privacy Notice !
          </h2>
          <p className="text-lg md:text-xl ">
            We value your privacy and are committed to safeguarding your
            personal information. Learn more about how we collect, use, and
            protect your data in this privacy notice.
          </p>
          <p className="text-lg md:text-xl mt-4 font-semibold">
            Your data belongs to you — and we&#39;re here to keep it that way.
          </p>
          <h3 className="text-3xl mt-5">Last Updated 22nd July 2025</h3>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white w-full py-10 px-6 md:px-50">
        <h2
          className="text-5xl font-bold mb-4 text-gray-800 sm:text-4xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Introduction  
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          At <strong>Techno Communications Global Pvt Ltd</strong>, your privacy
          is not just a policy — it&apos;s a promise. We value the trust you place in
          us when you share your personal information. Operating under the legal
          frameworks of India — including the <strong>Information Technology Act, 2000</strong>, the <strong>SPDI Rules 2011</strong>, and the latest <strong>Digital Personal Data Protection Act, 2023</strong> — we are
          committed to protecting your data with the highest standards of
          security, transparency, and integrity.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          This Privacy Policy is designed to provide clear and transparent
          insights into <strong>what data we collect, why we collect it, how we use it,</strong> and how <strong>you remain in control</strong>. Every click,
          interaction, or submission is safeguarded with purpose and care.
        </p>

        <p className="text-gray-700 leading-relaxed font-semibold">
          Your data belongs to you — and we&#39;re here to keep it that way.
        </p>

        {/* Cards */}
        {[...Array(6)].map((_, idx) => {
          const cardContent = [
            {
              title: "1. Data We Collect",
              content: (
                <ul className="list-disc text-gray-700 pl-6 space-y-1">
                  <li>Personal Identification Information (Name, Email, Phone Number)</li>
                  <li>Professional Information (Job title, Company details)</li>
                  <li>Financial Information where applicable</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              ),
            },
            {
              title: "2. How We Use Your Data",
              content: (
                <ul className="list-disc text-gray-700 pl-6 space-y-1">
                  <li>To provide and improve our services</li>
                  <li>To communicate updates, offers, and customer support</li>
                  <li>To comply with legal obligations and audits</li>
                </ul>
              ),
            },
            {
              title: "3. Data Security",
              content: (
                <p>
                  We implement strict security measures in line with ISO/IEC standards to protect your data from unauthorized access, alteration, or disclosure.
                </p>
              ),
            },
            {
              title: "4. Your Rights",
              content: (
                <ul className="list-disc text-gray-700 pl-6 space-y-1">
                  <li>Right to Access</li>
                  <li>Right to Correction</li>
                  <li>Right to Withdraw Consent</li>
                  <li>Right to Data Portability under applicable laws</li>
                </ul>
              ),
            },
            {
              title: "5. Policy Updates",
              content: (
                <p>
                  This policy may be updated periodically to reflect legal, regulatory, or operational changes. We encourage users to review this policy regularly.
                </p>
              ),
            },
            {
              title: "6. Contact Us",
              content: (
                <div>
                  <p className="mb-2">
                    If you have any questions about this Privacy Policy or your data, you can contact us at:
                  </p>
                  <p>
                    <strong>Email:</strong> info@technocommunicationsglobal.com<br />
                    <strong>Phone:</strong> +91-8019316555
                  </p>
                </div>
              ),
            },
          ];

          const { title, content } = cardContent[idx];
          return (
            <div key={idx} className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">{title}</h2>
              <div className="text-gray-700 leading-relaxed">{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
