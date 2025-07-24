import React from "react";
import { Users, MonitorCheck, PenTool, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: <MonitorCheck className="h-6 w-6" />,
    title: "Assistance Virtuelle",
    items: [
      "Gestion d’e-mails et planning",
      "Suivi de projets & tâches admin",
      "Mise en page de documents",
      "Support client à distance",
    ],
    color: "from-blue-600 to-[rgb(27,0,133)]",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Management",
    items: [
      "Gestion Facebook & Instagram",
      "Création de visuels & stories",
      "Planification de posts",
      "Réponses & animation",
    ],
    color: "from-blue-700 to-[rgb(27,0,133)]",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Design Graphique",
    items: [
      "Création de logos & affiches",
      "Refonte d’identité visuelle",
      "Branding complet",
      "Supports digitaux",
    ],
    color: "from-blue-800 to-[rgb(27,0,133)]",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Création Web Basique",
    items: ["Maquettage de pages HTML/CSS", "Participation UI avec Figma"],
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
];

const ServicesTsara = () => {
  return (
    <section
      id="services"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Des solutions sur mesure pour accompagner Mes projets digitaux
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full h-[200px] max-w-[600px]
 flex flex-col"
            >
              <div className="flex items-center mb-1">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${service.color} text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {service.title}
                </h3>
              </div>

              <ul className="space-y-1 pl-1 text-gray-700 dark:text-gray-300 text-sm">
                {service.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              {/* Ce bloc pousse le contenu pour équilibrer les hauteurs sans étirer */}
              <div className="flex-grow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTsara;
