import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import freelanceProjectImage from './photo/freelans/05ce30ff-abbd-40d2-8e26-6535825aad61.jpeg';

const experiences = [
    {
        id: 1,
        type: 'Freelancing',
        title: 'Mobile App Developer',
        company: 'Freelance',
        duration: '2024 - Present',
        description: 'Developing mobile applications using React Native with Supabase backend. Working directly with clients to deliver tailored solutions that meet their business needs.',
        deliverables: [
            'Built cross-platform mobile apps with React Native',
            'Integrated Supabase for real-time database and authentication',
            'Delivered projects on time with client satisfaction',
            'Provided ongoing maintenance and support',
        ],
        images: [
            freelanceProjectImage,
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
        ],
        disableLightbox: true,
    },
    {
        id: 2,
        type: 'Internship',
        title: 'Software Development Intern',
        company: 'Ibotix',
        duration: 'Summer 2024',
        description: 'Developed an AI-powered Call Assistant to solve critical customer support challenges. The company faced high user complaint volume with limited staff, so we built an intelligent system that listens to customer problems and provides automated solutions using AI technology.',
        deliverables: [
            'Built AI Call Assistant for automated customer support',
            'Reduced support team workload through intelligent problem resolution',
            'Integrated AI for natural language understanding and solution generation',
            'Improved customer satisfaction with instant problem-solving',
        ],
        images: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        ],
    },
];

const ImageGallery = ({ images, title, disableLightbox = false }) => {
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
            <div className="relative group overflow-hidden rounded-xl">
                <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    className={`w-full h-48 object-cover ${disableLightbox ? 'cursor-default' : 'cursor-pointer'}`}
                    onClick={() => !disableLightbox && setLightboxOpen(true)}
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </>
                )}

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

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

                        <div className="relative max-w-4xl max-h-[80vh] w-full mx-4">
                            <img
                                src={images[currentIndex]}
                                alt={`${title} - Image ${currentIndex + 1}`}
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section bg-navy-950 relative overflow-hidden">
            <div className="absolute inset-0 particles-bg opacity-30" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        My professional journey in software development
                    </p>
                </motion.div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass rounded-2xl overflow-hidden card-hover"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${exp.type === 'Freelancing'
                                            ? 'bg-emerald-500/20 text-emerald-400'
                                            : 'bg-blue-500/20 text-blue-400'
                                            }`}>
                                            {exp.type}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                            <Calendar size={12} />
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                                    <p className="text-blue-400 text-sm mb-4 flex items-center gap-2">
                                        <Briefcase size={14} />
                                        {exp.company}
                                    </p>

                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {exp.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-4 md:p-6">
                                    <ImageGallery images={exp.images} title={exp.title} disableLightbox={exp.disableLightbox} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
