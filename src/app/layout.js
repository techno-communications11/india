  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata = {
    title: "Techno Communications Global PVT LTD",
    description: "Techno Communications Global PVT LTD",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Techno Communications Global PVT LTD",
                "url": "https://technocommunicationsglobal.com",
                "logo": "https://technocommunicationsglobal.com/logo.png",
                "description": "Techno Communications provides IT services and telecom consulting in Hyderabad, Telangana.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8019316555",
                  "contactType": "Customer Service",
                  "areaServed": "INDIA"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/tcgpl/"
                ]
              }
              `
            }}
          />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
