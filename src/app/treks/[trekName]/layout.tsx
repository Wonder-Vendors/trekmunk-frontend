import Footer from "@/components/shared/Footer";
import React from "react";
// import "../../globals.css";

export default function TrekLayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <main>
    <section className="relative overflow-hidden">
      {children}
    </section>
    <footer>
      <Footer/>
    </footer>
    </main>
  );
}
