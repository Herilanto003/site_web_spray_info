import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Target,
  Award,
  BookOpen,
  Building,
  X,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import histoire1 from "/assets/histoire1.jpg";
import histoire2 from "/assets/histoire2.jpg";
import histoire3 from "/assets/histoire3.jpg";
import histoire4 from "/assets/histoire4.jpg";
import idea from "/assets/idea.jpg";
import sprayl from "/assets/sprayl.jpg";
import sprayx from "/assets/sprayx.jpg";

const About = () => {
  const [showAllTimeline, setShowAllTimeline] = useState(false);

  const toggleTimeline = () => {
    setShowAllTimeline(!showAllTimeline);
  };

  // Images Unsplash
  const images = {
    team: histoire1,
    classroom: histoire2,
    vision: histoire3,
    partner: histoire4,
  };

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-20">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6">{children}</div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div id="apropos" className="min-h-screen pt-16 bg-gray-100">
      {/* Hero Section - Section animée */}
      <div className="flex flex-col items-center justify-center pt-5">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-blue-400 px-4 py-2 rounded-full mb-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl font-medium text-blue-800">
            À propos de nous
          </span>
        </motion.div>

        <motion.p className="text-xl text-gray-900 max-w-3xl mx-auto">
          Votre passerelle vers l'excellence technologique
        </motion.p>
      </div>

      {/* Summary Cards Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Histoire Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-400 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-blue-600 p-4 rounded-full w-16 h-16 mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Calendar className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Notre Histoire
              </h3>
              <p className="text-gray-900 text-center mb-6 leading-relaxed">
                Découvrez le parcours de Spray_Info depuis sa fondation en 2022
                par trois ingénieurs passionnés jusqu'à son expansion
                stratégique.
              </p>
              <div className="text-center">
                <motion.button
                  onClick={() => openModal("histoire")}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir plus
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Objectifs Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-400 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-blue-600 p-4 rounded-full w-16 h-16 mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Nos Objectifs
              </h3>
              <p className="text-gray-900 text-center mb-6 leading-relaxed">
                Explorez nos objectifs stratégiques : formation professionnelle
                - Spray_learn, université privée - Spray_X et cabinet de conseil
                - Spray_idea.
              </p>
              <div className="text-center">
                <motion.button
                  onClick={() => openModal("objectifs")}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir plus
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Missions Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-400 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-blue-600 p-4 rounded-full w-16 h-16 mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Nos Missions
              </h3>
              <p className="text-gray-900 text-center mb-6 leading-relaxed">
                Découvrez nos missions : former les talents Web 3.0, rendre la
                technologie accessible et accompagner la transformation
                digitale.
              </p>
              <div className="text-center">
                <motion.button
                  onClick={() => openModal("missions")}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir plus
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Histoire Modal */}
      <Modal
        isOpen={activeModal === "histoire"}
        onClose={closeModal}
        title="Notre Histoire"
      >
        <div
          className="mb-12 sm:mb-20 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Notre Parcours
            </h3>
          </div>

          <div className="relative">
            {/* Ligne de timeline animée - Mobile: à gauche, Desktop: au centre */}
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800 rounded-full animate-pulse"></div>

            {/* Événements timeline */}
            <div className="space-y-8 sm:space-y-16 ml-8 sm:ml-0">
              {/* 2022 - Fondation */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="sm:flex-1 sm:pr-8 sm:text-right order-2 sm:order-1 mt-4 sm:mt-0">
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border-l-4 sm:border-l-4 border-blue-600 transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-500 group">
                    <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 h-32 sm:h-40">
                      <img
                        src={images.classroom}
                        alt="Fondation Spray_Info"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      Janvier 2022 - Fondation
                    </h4>
                    <p className="text-sm sm:text-base text-gray-900">
                      Fondé par trois ingénieurs en informatique issus de l'ENI
                      Tuléar. Début modeste avec 2 étudiants dans une simple
                      maison.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full border-2 sm:border-4 border-white z-10 animate-pulse order-1 sm:order-2 -ml-2 sm:ml-0"></div>
                <div className="sm:flex-1 sm:pl-8 order-3"></div>
              </div>

              {/* 2022-2023 - Spécialisation */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="sm:flex-1 sm:pr-8 order-1"></div>
                <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-700 rounded-full border-2 sm:border-4 border-white z-10 animate-pulse order-2 -ml-2 sm:ml-0"></div>
                <div className="sm:flex-1 sm:pl-8 order-3 mt-4 sm:mt-0">
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border-l-4 sm:border-r-4 border-blue-700 transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl hover:shadow-blue-700/25 transition-all duration-500 group">
                    <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 h-32 sm:h-40">
                      <img
                        src={histoire1}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      2022-2023 - Spécialisation
                    </h4>
                    <p className="text-sm sm:text-base text-gray-900">
                      Concentration exclusive sur la formation en informatique.
                      Acquisition du siège actuel pouvant accueillir plus de 100
                      étudiants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Événements supplémentaires */}
            <div className="space-y-8 sm:space-y-16 mt-8 sm:mt-16 ml-8 sm:ml-0 animate-fadeIn">
              {/* 2024 - Diversification */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="sm:flex-1 sm:pr-8 sm:text-right order-2 sm:order-1 mt-4 sm:mt-0">
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border-l-4 sm:border-l-4 border-blue-800 transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl hover:shadow-blue-800/25 transition-all duration-500 group">
                    <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 h-32 sm:h-40">
                      <img
                        src={histoire4}
                        alt="Diversification Spray_Info"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      2024 - Diversification
                    </h4>
                    <p className="text-sm sm:text-base text-gray-900">
                      Élargissement vers la technologie, développement
                      personnel, communication, marketing et leadership.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-800 rounded-full border-2 sm:border-4 border-white z-10 animate-pulse order-1 sm:order-2 -ml-2 sm:ml-0"></div>
                <div className="sm:flex-1 sm:pl-8 order-3"></div>
              </div>

              {/* 2025 - Expansion */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="sm:flex-1 sm:pr-8 order-1"></div>
                <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-900 rounded-full border-2 sm:border-4 border-white z-10 animate-pulse order-2 -ml-2 sm:ml-0"></div>
                <div className="sm:flex-1 sm:pl-8 order-3 mt-4 sm:mt-0">
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border-l-4 sm:border-r-4 border-blue-900 transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-500 group">
                    <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 h-32 sm:h-40">
                      <img
                        src={images.vision}
                        alt="Expansion Spray_Info"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      2025 - Expansion Stratégique
                    </h4>
                    <p className="text-sm sm:text-base text-gray-900">
                      Lancement de Spray_idea (Cabinet de conseil),
                      TechnoSupport et l'Université privée Spray_X.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Objectifs Modal */}
      <Modal
        isOpen={activeModal === "objectifs"}
        onClose={closeModal}
        title="Nos Objectifs"
        className="max-w-3xl" // Pour une modal plus large
      >
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {/* Objectif 1 */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
              <motion.img
                src={sprayl}
                alt="Formation professionnelle"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute top-4 left-4 bg-blue-100 p-3 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Formation et insertion professionnelle
              </h3>
              <p className="text-gray-900 leading-relaxed">
                Faciliter l'apprentissage des technologies et accompagner les
                étudiants dans leur préparation à la vie professionnelle. Nous
                mettons l'accent sur une approche pratique et orientée vers les
                besoins du marché du travail.
              </p>
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* Objectif 2 */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden order-1 md:order-2">
              <motion.img
                src={sprayx}
                alt="Université Spray_X"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute top-4 left-4 bg-blue-100 p-3 rounded-lg shadow-md">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="w-full md:w-2/3 order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Université privée Spray_X
              </h3>
              <p className="text-gray-900 leading-relaxed">
                Proposer des formations diplômantes de haut niveau avec une
                pédagogie innovante centrée sur l'intelligence appliquée. Notre
                université offre deux filières principales : Génie Logiciel et
                Administration Systèmes & Réseaux.
              </p>
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* Objectif 3 */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
              <motion.img
                src={idea}
                alt="Cabinet de conseil"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute top-4 left-4 bg-blue-100 p-3 rounded-lg shadow-md">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Spray_idea - Cabinet de conseil
              </h3>
              <p className="text-gray-900 leading-relaxed">
                Aider les entreprises dans leur transformation digitale et
                offrir un accompagnement personnalisé. Notre cabinet propose des
                solutions sur mesure pour optimiser les processus numériques des
                organisations.
              </p>
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Modal>
      {/* Missions Modal */}
      <Modal
        isOpen={activeModal === "missions"}
        onClose={closeModal}
        title="Nos Missions"
      >
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Former les talents de demain (Web 3.0)
            </h3>
            <p className="text-gray-900 leading-relaxed">
              Offrir une formation universitaire de qualité destinée à former
              des experts capables de répondre aux exigences du marché. Nous
              préparons nos étudiants aux technologies émergentes et aux défis
              futurs du numérique.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rendre la technologie accessible à tous
            </h3>
            <p className="text-gray-900 leading-relaxed">
              Proposer des formations professionnelles ouvertes à tous, sans
              distinction de genre ou de niveau. Notre approche inclusive
              garantit que chacun puisse développer ses compétences numériques.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Accompagnement stratégique
            </h3>
            <p className="text-gray-900 leading-relaxed">
              Proposer un accompagnement personnalisé aux entreprises et aux
              individus en transformation digitale. Nous offrons un support
              complet pour naviguer dans l'écosystème numérique moderne.
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Répondre aux besoins numériques
            </h3>
            <p className="text-gray-900 leading-relaxed">
              Proposer des services numériques professionnels et un
              accompagnement technique aux entreprises. Notre équipe
              TechnoSupport assure un service de qualité pour tous vos projets
              digitaux.
            </p>
          </motion.div>

          <motion.div
            className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovation et recherche
            </h3>
            <p className="text-gray-900 leading-relaxed">
              Promouvoir l'innovation technologique et la recherche appliquée
              dans le domaine du numérique. Nous encourageons nos étudiants et
              partenaires à explorer de nouvelles solutions créatives.
            </p>
          </motion.div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default About;
