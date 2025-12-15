import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Aadhar Expo images
import adhar from './photo/achivment/adhar.jpeg';
import ahader3 from './photo/achivment/ahader3.jpeg';
import ahar2 from './photo/achivment/ahar2.jpeg';

// Samadhan 2.0 images
import sama1 from './photo/achivment/sama1.jpeg';
import sama2 from './photo/achivment/sama2.jpeg';
import sama3 from './photo/achivment/sama3.jpeg';

// Adobe Hackathon image
import adobe from './photo/achivment/adobe.jpeg';

// Nirman Hackathon image
import nirman from './photo/achivment/nirman.jpeg';

// SIH College Level images
import sihCollege from './photo/achivment/sih.jpeg';

// SIH SISTEC Ratibad images
import sihRatibad1 from './photo/achivment/sihh.jpeg';
import sihRatibad2 from './photo/achivment/Sih3.0.jpeg';
import sihRatibad4 from './photo/achivment/siH3.0.jpeg';
import sihRatibad3 from './photo/achivment/sih.jpeg';

// IIT Bombay images
import iitb1 from './photo/achivment/iitb1.jpeg';
import iitb2 from './photo/achivment/iitb2.jpeg';

// Super 50 images
import super1 from './photo/achivment/super1.jpeg';
import superImg from './photo/achivment/super.jpeg';
import ssuper from './photo/achivment/ssuper.jpeg';

const achievements = [
    {
        id: 1,
        title: '1st Place - Aadhar Expo 2.0',
        description: 'Won first place in the Aadhar Expo 2.0 hackathon with an innovative solution.',
        icon: '🏆',
        images: [
            adhar,
            ahader3,
            ahar2,
        ],
    },
    {
        id: 2,
        title: '5th Position - Fintech Hackathon at IIT Bombay',
        description: '4-member team selected in Top 10 from virtual round, competed at IIT Bombay campus.',
        icon: '🏆',
        images: [
            iitb1,
            iitb2,
        ],
    },
    {
        id: 3,
        title: 'Best Performer - Samadhan 2.0 Innovation Challenge',
        description: 'Achieved Best Performer award in the Samadhan 2.0 Innovation Challenge Hackathon.',
        icon: '🏆',
        images: [
            sama1,
            sama2,
            sama3,
        ],
    },
    {
        id: 4,
        title: 'Qualified for Final Round - Adobe India Hackathon',
        description: 'Successfully cleared the first round and qualified for the second round of the prestigious Adobe India Hackathon.',
        icon: '🏆',
        images: [
            adobe,
        ],
    },
    {
        id: 5,
        title: 'Qualified for Final Round - Nirmal Hackathon',
        description: 'Advanced to the final round of Nirmal Hackathon with an innovative project.',
        icon: '🏆',
        images: [
            nirman,
        ],
    },
    {
        id: 6,
        title: 'SIH College Level Qualifier',
        description: 'Successfully cleared the Smart India Hackathon at college level, advancing to the next round.',
        icon: '🏆',
        images: [
            sihCollege,
        ],
    },
    {
        id: 7,
        title: '1st Position - SIH SISTEC Innovation Hackathon, Ratibad',
        description: 'Secured 1st position in our category at the SIH SISTEC Innovation Hackathon held at Ratibad campus.',
        icon: '🥇',
        images: [
            sihRatibad1,
            sihRatibad2,
            sihRatibad3,
            sihRatibad4,
        ],
    },
    {
        id: 8,
        title: 'Selected in Super 50 Program',
        description: 'Successfully cleared all 3 rounds: Round 1 - Coding MCQs in Java, C++, and Python with 2 coding questions; Round 2 - Problem solving; Round 3 - Project presentation and interview covering DSA and OOP concepts.',
        icon: '⭐',
        images: [
            super1,
            superImg,
            ssuper,
        ],
    },
];

const ImageGallery = ({ images, title, onOpenLightbox }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative group overflow-hidden rounded-t-xl">
            <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                className="w-full h-44 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                onClick={() => onOpenLightbox(images, currentIndex)}
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

            {/* Image counter */}
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-xs text-white">
                {currentIndex + 1} / {images.length}
            </div>

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

            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

const Achievements = () => {
    const [lightboxData, setLightboxData] = useState({ open: false, images: [], index: 0 });

    const openLightbox = (images, index) => {
        setLightboxData({ open: true, images, index });
    };

    const closeLightbox = () => {
        setLightboxData({ open: false, images: [], index: 0 });
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        setLightboxData(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length
        }));
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setLightboxData(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length
        }));
    };

    return (
        <section id="achievements" className="section bg-navy-900 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"
                />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="section-subtitle">
                        Hackathon wins and recognitions that showcase my competitive spirit
                    </p>
                </motion.div>

                {/* 2 achievements per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden card-hover"
                        >
                            <ImageGallery
                                images={achievement.images}
                                title={achievement.title}
                                onOpenLightbox={openLightbox}
                            />

                            <div className="p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-3xl">{achievement.icon}</span>
                                    <h3 className="text-lg font-semibold text-white leading-tight">
                                        {achievement.title}
                                    </h3>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightboxData.open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lightbox-overlay"
                            onClick={closeLightbox}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-5xl max-h-[85vh] w-full mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={lightboxData.images[lightboxData.index]}
                                    alt={`Image ${lightboxData.index + 1}`}
                                    className="w-full h-full object-contain rounded-lg"
                                />

                                {lightboxData.images.length > 1 && (
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
                                    {lightboxData.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLightboxData(prev => ({ ...prev, index }));
                                            }}
                                            className={`w-3 h-3 rounded-full transition-colors ${index === lightboxData.index ? 'bg-white' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 rounded text-sm text-white">
                                    {lightboxData.index + 1} / {lightboxData.images.length}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Achievements;
