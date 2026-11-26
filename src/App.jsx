// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}