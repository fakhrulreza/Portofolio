import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

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

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                                <div>
                                    <h4 className="text-white font-medium">Email</h4>
                                    <a href="mailto:mufaza192603@gmail.com" className="text-slate-400 hover:text-primary transition-colors">mufaza192603@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                                <div>
                                    <h4 className="text-white font-medium">Location</h4>
                                    <p className="text-slate-400">Pemalang, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-theme-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/50"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-theme-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/50"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full bg-theme-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none focus:ring-1 focus:ring-primary/50"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-secondary text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                        >
                            Send Message <Send className="ml-2 h-4 w-4" />
                        </button>
                    </motion.form> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
