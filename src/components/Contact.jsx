import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-theme-black border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-slate-400">Interested in working together? Let's connect!</p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-3xl"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                                <a href="mailto:mufaza192603@gmail.com" className="text-slate-400 hover:text-primary transition-colors text-lg">
                                    mufaza192603@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                                <p className="text-slate-400 text-lg">Pemalang, Indonesia</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
