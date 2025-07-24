import React, { useState, useEffect } from "react";
import spray from "/assets/spray.png";
import etudiant2 from "/assets/etudiant5.jpg";
import etudiant3 from "/assets/etudiant3.jpg";
import etudiant4 from "/assets/etudiant4.jpg";
import logo from "/assets/logo.png";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images de fond pour le slider
  const backgroundImages = [etudiant2, etudiant3, etudiant4];

  // Animation automatique du slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slider d'images de fond */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Calque sombre avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Contenu principal */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-20 min-h-screen flex items-start pt-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Contenu textuel - Gauche */}
          <div className="text-white space-y-6 lg:space-y-8 text-center">
            {/* Grand titre avec animation */}
            <div className="space-y-2 animate-fade-in-up">
              <h1 className="text-8xl sm:text-5xl lg:text-6xl xl:text-8xl font-black tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
                  Spray_info
                </span>
              </h1>
              <br />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-light italic text-white animate-fade-in-up animation-delay-300 text-center">
                "De aona fandeani jiaby!!!"
              </h2>
            </div>

            {/* Description avec animation */}
            <div className="space-y-4 animate-fade-in-up animation-delay-600">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                Votre Hub Numérique 3.0
              </h4>
              <p className="text-base sm:text-lg lg:text-2xl leading-relaxed text-gray-200">
                Accompagner vos idées, nourrir vos inspirations, réaliser vos
                projets numériques : notre engagement au quotidien.
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900 sm:justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Découvrir nos services
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-105">
                Nous contacter
              </button>
            </div>
          </div>

          {/* Logo animé - Droite */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Cercles d'animation en arrière-plan */}
              {/* <div className="absolute inset-0 animate-ping">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-r from-blue-600/20 to-blue-900/20"></div>
              </div> */}
              <div className="absolute inset-4 animate-pulse animation-delay-500">
                <div
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #100060/20, rgba(37, 99, 235, 0.2))",
                  }}
                ></div>
              </div>

              {/* Logo principal */}
              <div className="relative z-10 w-80 sm:w-96 sm:h-80 lg:w-122 lg:h-122 rounded-full flex items-center justify-center animate-float shadow-2xl">
                <img src={spray} className="z-30" />

                {/* Particules flottantes */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-blue-600 opacity-70 rounded-full animate-bounce animation-delay-300"></div>
                <div className="absolute bottom-8 left-8 w-22 h-22 bg-blue-300 rounded-full animate-ping animation-delay-3000"></div>
                <div className="absolute top-1/2 left-4 w-22 h-22 bg-blue-200 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500 scale-125"
                : "bg-blue-300/50 hover:bg-blue-400/80"
            }`}
          />
        ))}
      </div>

      {/* Flèche de scroll */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        /* Animation ping plus lente */
        .animate-ping {
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 2s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

export default Banner;
