import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="bty">
      <Header />
      <main>
        <Hero />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
