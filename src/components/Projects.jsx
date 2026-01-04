import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

import portfolioImg from '../assets/portofolio.png';
import dashboardImg from '../assets/salesdashboard.png';
import travelImg from '../assets/travel.png';
import LMSImg from '../assets/lms.png';
import cryptoImg from '../assets/ethereum.png';
import scriptImg from '../assets/script_preview_1766825781943.png';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations and a glassmorphism design.",
            tech: ["React", "Tailwind", "Framer Motion"],
            github: "https://github.com/fakhrulreza/Portofolio",
            demo: "#",
            image: portfolioImg
        },
        {
            title: "Stationery Store Sales Analysis Dashboard",
            description: "Create a visualization dashboard for analyzing stationery store sales using Looker Studio tools.",
            tech: ["Python", "Ecxel", "SQLite", "Looker Studio"],
            github: "https://github.com/yourusername/data-project",
            demo: null,
            image: dashboardImg
        },
        {
            title: "Fullstack Javascript MERN - Course LMS",
            description: "Developing a web-based Learning Management System (LMS) using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
            tech: ["Node.js", "Express.js", "React.js", "MongoDB"],
            github: "https://github.com/yourusername/ecommerce-api",
            demo: null,
            image: LMSImg
        },
        {
            title: "Website Company Profile Agency Travel",
            description: "Developing a static company profile website for a travel or trip agency using React.js.",
            tech: ["React.js", "Tilwind CSS"],
            github: "https://github.com/fakhrulreza/Travel",
            demo: null,
            image: travelImg
        },
        {
            title: "Prediction Ethereum Price Using GRU Model And XGBoost Model",
            description: "Developing a machine learning model for a thesis project using GRU and XGBoost methods to predict Ethereum cryptocurrency prices.",
            tech: ["Python", "Pandas", "Tensorflow", "Streamlit"],
            github: "https://github.com/fakhrulreza/Prediksi-Harga-Cryptocurrency-Ethereum-menggunakan-model-GRU-dan-XGBoost",
            demo: null,
            image: cryptoImg
        },
        {
            title: "Javanese Character Recognition Using CNN",
            description: "Developed a Javanese Script (Aksara Jawa) Recognition System using Convolutional Neural Networks (CNN) to classify handwritten characters with high accuracy. Implemented image preprocessing and data augmentation techniques to enhance model robustness",
            tech: ["Python", "Tensorflow", "OpenCV", "Numpy"],
            github: "https://github.com/fakhrulreza/Pengenalan-Pola-Aksara-Jawa",
            demo: null,
            image: scriptImg
        }
    ];

    // Helper to resolve images (since we're dynamically mapping)
    // In a real app with Vite, you might import them all at the top or use import.meta.glob
    // For this simple case, we'll map string keys to imports at the top

    return (
        <section id="projects" className="py-20 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        A showcase of my technical journey, from full-stack web applications to data science and machine learning models.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-900 animate-pulse" /> {/* Placeholder loading state if needed */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex space-x-3 shrink-0 ml-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-full">
                                                <Github className="h-5 w-5" />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-full">
                                                <ExternalLink className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3 font-light">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2 py-1 text-xs font-semibold text-primary bg-primary/5 rounded-md border border-primary/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
