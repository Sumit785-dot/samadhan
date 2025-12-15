import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import freelanceProjectImage from './photo/freelans/05ce30ff-abbd-40d2-8e26-6535825aad61.jpeg';

const projects = [
    {
        id: 1,
        title: 'AI-Powered Group Discussion Platform',
        role: 'Team Lead',
        description: 'Advanced online GD practice platform featuring 1-on-1 and 1-on-7 AI participant modes. Includes AI teacher for roadmap creation, daily 15-minute English conversation practice, and comprehensive feedback system for improving communication skills.',
        tech: ['React.js', 'Tailwind CSS', 'Django', 'Python', 'OpenAI', 'Eleven Labs TTS'],
        github: 'https://github.com/Sumit785-dot/ai-gd-platform',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 2,
        title: 'Education Info Portal',
        role: 'Team Lead',
        description: 'Comprehensive education platform providing subject-wise notes and video lectures for all engineering branches including CSE, Civil, and Mechanical. Features organized content delivery and responsive design for seamless learning experience.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
        github: 'https://github.com/Sumit785-dot/education-portal',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 3,
        title: 'Adobe Hackathon – AI PDF Analyzer',
        role: 'Team Lead',
        description: 'Intelligent PDF analysis tool that generates professional summaries and provides role-specific insights. Adapts content based on user profession (e.g., doctors receive medical-focused analysis). Features Google Gemini API integration and Azure TTS.',
        tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API', 'Azure TTS'],
        github: 'https://github.com/Sumit785-dot/ai-pdf-analyzer',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 4,
        title: 'Healthcare Mobile App',
        role: 'Freelance',
        description: 'Mobile application for healthcare services enabling patients to contact doctors, request medical suggestions, and conduct online health checkups. Built with React Native and Supabase for seamless mobile experience.',
        tech: ['React Native', 'Supabase', 'JavaScript'],
        github: null,
        live: null,
        images: [
            freelanceProjectImage,
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 5,
        title: 'Share Console - Lab Monitoring System',
        role: 'Team Lead',
        description: 'Real-time lab monitoring platform for teachers to view and manage 70+ student consoles simultaneously. Features live code viewing, real-time code editing, error detection, and student progress tracking. Helps teachers identify if students are coding independently or relying on AI, promoting genuine learning.',
        tech: ['React.js', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Express.js'],
        github: 'https://github.com/Sumit785-dot/share-console',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        ],
    },
];

const ImageGallery = ({ images, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="relative group overflow-hidden rounded-t-xl">
                <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentIndex]}
                    alt={`${projectTitle} - Image ${currentIndex + 1}`}
                    className="w-full h-48 sm:h-56 object-cover cursor-pointer"
                    onClick={() => setLightboxOpen(true)}
                />

                {/* Navigation arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}

                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative max-w-5xl max-h-[80vh] w-full mx-4">
                            <motion.img
                                key={currentIndex}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={images[currentIndex]}
                                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                                className="w-full h-full object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                    >
                                        <ChevronLeft size={28} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                    >
                                        <ChevronRight size={28} />
                                    </button>
                                </>
                            )}

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentIndex(index);
                                        }}
                                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section bg-navy-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of my best work in web development, AI integration, and mobile apps
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                        >
                            <ImageGallery images={project.images} projectTitle={project.title} />

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">
                                        {project.role}
                                    </span>
                                </div>

                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-sm"
                                        >
                                            <Github size={16} />
                                            Code
                                        </motion.a>
                                    )}
                                    {project.live && (
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </motion.a>
                                    )}
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
