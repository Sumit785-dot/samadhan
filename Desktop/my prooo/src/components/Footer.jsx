import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-950 border-t border-slate-800/50">
            <div className="container-custom py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <motion.a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToTop();
                            }}
                            className="text-2xl font-bold font-poppins gradient-text inline-block mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            Sumit<span className="text-white">.</span>
                        </motion.a>
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Sumit Mewada. All rights reserved.
                        </p>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>in Bhopal, India by Sumit</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="https://www.linkedin.com/in/sumit-mewadaa420"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                        >
                            <Linkedin size={18} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Sumit785-dot"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            href="mailto:sumitmewada736@gmail.com"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 transition-all"
                        >
                            <Mail size={18} />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-shadow z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
};

export default Footer;
