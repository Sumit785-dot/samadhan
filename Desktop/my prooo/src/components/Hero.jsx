import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    Linkedin,
    Github,
    Download,
    ArrowDown,
    Sparkles
} from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        { icon: Phone, href: 'tel:+919876543210', label: 'Phone' },
        { icon: Mail, href: 'mailto:sumitmewada736@gmail.com', label: 'Email' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/sumit-mewadaa420', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com/Sumit785-dot', label: 'GitHub' },
    ];

    const handleScrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg particles-bg"
        >
            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-40 right-20 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl"
                />
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl"
                />
            </div>

            <div className="container-custom text-center relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-blue-300 mb-8"
                    >
                        <Sparkles size={16} className="text-yellow-400" />
                        <span>Available for opportunities</span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6"
                >
                    Hi, I'm{' '}
                    <span className="gradient-text">Sumit Mewada</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 font-light"
                >
                    Full-Stack Developer | AI Enthusiast | Hackathon Winner
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-slate-400 max-w-2xl mx-auto mb-10"
                >
                    Crafting innovative digital experiences with React, Django, and AI integration.
                    Passionate about building solutions that make a difference.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <motion.button
                        onClick={handleScrollToProjects}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                    >
                        View Projects
                        <ArrowDown size={18} />
                    </motion.button>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center justify-center gap-4"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.2, y: -3 }}
                            className="p-3 rounded-full glass hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-slate-500"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
