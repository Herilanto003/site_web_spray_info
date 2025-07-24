import React, { useState, useEffect } from "react";
import Header from "../components/portfolio-heriniaina/Header";
import Hero from "../components/portfolio-heriniaina/Hero_Tsara";
import About from "../components/portfolio-heriniaina/About_Tsara";
import Skills from "../components/portfolio-heriniaina/Skills_Tsara";
import Projects from "../components/portfolio-heriniaina/Projects_Tsara";
import Service from "../components/portfolio-heriniaina/Service_Tsara";
import Contact from "../components/portfolio-heriniaina/Contact_Tsara";
import Footer from "../components/portfolio-heriniaina/Footer_Tsara";

function PortfolioHeriniaina() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Vérifier la préférence système au chargement
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    // Sauvegarder la préférence et appliquer la classe
    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default PortfolioHeriniaina;
