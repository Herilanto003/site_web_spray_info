import React from "react";
import { User, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours et ma passion pour le design et la
            communication digitale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Passionné par la création visuelle et la communication digitale
                depuis plusieurs années, je me spécialise dans la conception de
                supports graphiques percutants et la gestion de communauté en
                ligne. Mon approche combine créativité, stratégie digitale et
                compréhension des tendances actuelles.
              </p>
              <p className="leading-relaxed">
                J'ai travaillé avec diverses structures à Madagascar, notamment
                en tant que Community Manager pour Spray_Info et en tant que
                graphiste freelance pour des clients internationaux. Cette
                expérience m'a permis de développer une expertise polyvalente en
                création de contenu et en stratégie de marque.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Nom
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    TSARAMANGA JOSEPHINE
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Localisation
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fianarantsoa, Madagascar
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Expérience
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">3+ années</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Projets
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    50+ réalisés
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col space-y-8 items-center">
              <div className="bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] p-6 rounded-2xl text-white transform rotate-2 hover:rotate-6 transition-transform w-full max-w-md">
                <h3 className="font-bold text-lg mb-2">
                  Licence en Informatique
                </h3>
                <p className="text-sm opacity-90">
                  École Nationale d’Informatique (ENI),
                  <br />
                  Fianarantsoa – 2025
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-700 to-[rgb(27,0,133)] p-6 rounded-2xl text-white transform -rotate-1 hover:-rotate-6 transition-transform w-full max-w-md">
                <h3 className="font-bold text-lg mb-2">Baccalauréat Série C</h3>
                <p className="text-sm opacity-90">
                  Lycée Privé Les Capucines,
                  <br />
                  Manakara – 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
