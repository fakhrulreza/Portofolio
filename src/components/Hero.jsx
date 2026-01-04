import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Dna, Instagram } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-black">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-primary text-base font-medium mb-6 border border-primary/20 backdrop-blur-sm">
                        Software Engineer & Data Enthusiast
                    </span>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fakhrul Reza</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        A passionate Informatics Engineering graduate from <span className="text-white">Sultan Agung Islamic University</span>.
                        Focusing on building high-performance <span className="text-primary">Web Applications</span> and exploring the depths of <span className="text-secondary">Big Data & AI</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-black bg-primary hover:bg-secondary transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
                            View Projects <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-primary/30 text-base font-medium rounded-lg text-primary bg-transparent hover:bg-primary/10 transition-all">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-16 flex justify-center space-x-8">
                        <a href="https://github.com/fakhrulreza" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
                            <Github className="h-8 w-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammadfakhrulreza/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors transform hover:scale-110">
                            <Linkedin className="h-8 w-8" />
                        </a>
                        <a href="https://www.instagram.com/fakhrulrezaa_/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors transform hover:scale-110">
                            <Instagram className="h-8 w-8" />
                        </a>
                        <a href="mailto:mufaza192603@gmail.com" className="text-slate-500 hover:text-secondary transition-colors transform hover:scale-110">
                            <Mail className="h-8 w-8" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
