import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-theme-black relative overflow-visible">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A glimpse into my background, passion, and journey in the tech world.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                            <div className="absolute inset-4 border-2 border-secondary/30 rounded-full animate-spin-reverse-slow" style={{ animationDuration: '15s' }}></div>
                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src="/src/assets/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                        </div>
                    </motion.div>


                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Code className="mr-3 text-secondary h-8 w-8" />
                            My Journey
                        </h3>

                        <div className="space-y-6 text-slate-400 leading-relaxed font-light">
                            <p>
                                As a fresh graduate in Informatics Engineering from <span className="text-white font-medium">Sultan Agung Islamic University</span>, I have built a strong foundation in computer science and software development.
                            </p>
                            <p>
                                My passion lies in creating impactful digital solutions combining intuitive, <span className="text-primary font-medium">user friendly web interfaces</span> and <span className="text-secondary font-medium">data driven intelligence</span>.I am particularly focused on full-stack web development as well as Big Data fields such as Machine Learning, Data Science, Data Analytics, and Artificial Intelligence, where I enjoy transforming complex data into meaningful insights and real world applications.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <GraduationCap className="mr-3 text-primary h-6 w-6" />
                                Education
                            </h3>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-colors backdrop-blur-sm">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                    <h4 className="text-lg font-semibold text-slate-200">Bachelor of Informatics Engineering</h4>
                                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit border border-primary/20">2021 - 2025</span>
                                </div>
                                <p className="text-slate-400 font-medium">Sultan Agung Islamic University</p>
                                <p className="text-slate-500 text-sm mt-2">Specialized in Software Engineering and Artificial Intelligence.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
