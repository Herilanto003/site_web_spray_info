import React, { useState, useEffect } from "react";
import {
  Monitor,
  MessageCircle,
  Users,
  Headphones,
  Shield,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import etudiant from "/assets/etudiant2.jpg";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("services");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Spray_x",
      description: "Université privée",
      details:
        "Proposer des formations diplômantes de haut niveau dans les filières du Génie Logiciel et de l'Administration Système et Réseaux.•	Mettre en place une pédagogie innovante, centrée sur l’intelligence appliquée : « L’intelligence, version 3.0 ». •	Préparer des profils compétitifs, créatifs et entreprenants, capables d’évoluer dans un environnement numérique dynamique. ",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-400",
      borderColor: "border-blue-200",
      accent: "text-blue-600",
      slideFrom: "left",
    },
    {
      icon: MessageCircle,
      title: "Spray_Learn",
      description: "Formation et insertion professionnelle",
      details:
        "•	Faciliter l'apprentissage des technologies pour les jeunes passionnés, notamment dans les domaines de l’informatique, de la robotique, de la cybersécurité et des systèmes intelligents.Accompagner les étudiants universitaires dans l’amélioration de leurs compétences techniques et dans leur préparation à la vie professionnelle.Développer un apprentissage pratique grâce à des projets réels encadrés par des professionnels.",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-400",
      borderColor: "border-blue-200",
      accent: "text-blue-600",
      slideFrom: "right",
    },
    {
      icon: Users,
      title: " Spray_idea",
      description: "Cabinet de conseil",
      details:
        "•	Aider les entreprises à réussir leur transformation digitale. 	Offrir un accompagnement personnalisé en stratégie numérique, communication, leadership, et organisation interne.Apporter une expertise terrain pour améliorer la productivité et l’impact des structures partenaires.",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-400",
      borderColor: "border-blue-200",
      accent: "text-blue-600",
      slideFrom: "left",
    },
    {
      icon: Headphones,
      title: "SOLUTION NUMERIQUE",
      description: "Service de prestation Numerique",
      details:
        "•	Proposer des services technologiques professionnels : création de sites web, déploiement de CRM/ERP, cybersécurité, maintenance, etc.Offrir aux stagiaires et formateurs l’opportunité de travailler sur des projets concrets, en collaboration avec les entreprises.Créer une passerelle directe entre apprentissage technique et besoins réels des organisations.",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-400",
      borderColor: "border-blue-200",
      accent: "text-blue-600",
      slideFrom: "right",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${etudiant})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute top-0 right-0 bg-black/60 w-full h-full"></div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-2xl px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
            Nos Services
          </div>
          <p className="text-xl text-slate-50 max-w-3xl mx-auto leading-relaxed">
            En intégrant dans le domaine numérique, vous trouverez beaucoup
            d'avantages. Découvrez nos formations spécialisées conçues pour vous
            accompagner vers le succès.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-3xl p-8 border-2 ${
                service.borderColor
              } hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden cursor-pointer transform
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : service.slideFrom === "left"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }
              `}
              onMouseEnter={() => setHoveredService(null)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                transform: `
                  ${
                    isVisible
                      ? "translateX(0)"
                      : service.slideFrom === "left"
                      ? "translateX(-100%)"
                      : "translateX(100%)"
                  }
                  ${
                    hoveredService === index
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)"
                  }
                `,
                transitionDelay: `${index * 200}ms`,
                transitionDuration: "800ms",
              }}
            >
              {/* Animated background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="text-white" size={36} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-4xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-700 text-2xl font-semibold mb-4 group-hover:text-slate-800 transition-colors">
                      {service.description}
                    </p>

                    <p className="text-slate-600 text-justify leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                      {service.details}
                    </p>

                    {/* Stats Badge */}
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Découvrir toutes nos formations
            {/* <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
