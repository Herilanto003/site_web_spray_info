import React, { useState, useEffect } from "react";
import Header from "../components/portfolio-manga/Header";
import Hero from "../components/portfolio-manga/Hero_Tsara";
import About from "../components/portfolio-manga/About_Tsara";
import Skills from "../components/portfolio-manga/Skills_Tsara";
import Projects from "../components/portfolio-manga/Projects_Tsara";
import ServicesTsara from "../components/portfolio-manga/service_tsara";
import Contact from "../components/portfolio-manga/Contact_Tsara";
import Footer from "../components/portfolio-manga/Footer_Tsara";

function PortfolioManga() {
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
      <ServicesTsara />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default PortfolioManga;
