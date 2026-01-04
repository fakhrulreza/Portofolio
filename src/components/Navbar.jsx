import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Home, User, Cpu, FolderGit2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home className="h-7 w-7" />, iconOnly: true },
        { name: 'About', href: '#about', icon: <User className="h-7 w-7" /> },
        { name: 'Skills', href: '#skills', icon: <Cpu className="h-7 w-7" /> },
        { name: 'Projects', href: '#projects', icon: <FolderGit2 className="h-7 w-7" /> },
        { name: 'Contact', href: '#contact', icon: <Mail className="h-7 w-7" /> },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-primary/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
                        <div className="p-2 border border-primary/20 rounded-lg group-hover:border-primary/50 transition-colors">
                            <Terminal className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <span className="ml-3 text-3xl font-bold tracking-wider text-white font-display">POR<span className="text-primary">TOFOLIO</span></span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative flex items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-300 group"
                                >
                                    {link.iconOnly ? (
                                        <div className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                                            {link.icon}
                                        </div>
                                    ) : (
                                        <>
                                            <span className="group-hover:text-primary transition-colors">{link.icon}</span>
                                            <span className="text-sm font-medium tracking-wide">{link.name}</span>
                                        </>
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.7 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-primary focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-primary/20 backdrop-blur-xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-primary/10 px-4 py-3 rounded-xl transition-all font-medium"
                                >
                                    <span className="text-primary">{link.icon}</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
