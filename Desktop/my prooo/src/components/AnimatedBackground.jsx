import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Large floating gradient orbs */}
            <motion.div
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -40, 20, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-blue-500/5 blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, -40, 30, 0],
                    y: [0, 30, -20, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/10 blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -30, 50, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute bottom-[-10%] left-[20%] w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, -30, 40, 0],
                    y: [0, 40, -30, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-[60%] left-[5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-indigo-500/10 to-blue-500/5 blur-[80px]"
            />

            {/* Floating small bubbles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -60 - i * 10, 0],
                        x: [0, (i % 2 === 0 ? 20 : -20), 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6 + i * 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                    className="absolute rounded-full hidden sm:block"
                    style={{
                        width: `${12 + i * 6}px`,
                        height: `${12 + i * 6}px`,
                        left: `${10 + i * 10}%`,
                        top: `${15 + (i % 4) * 20}%`,
                        background: `radial-gradient(circle at 30% 30%, 
              ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.4)' :
                                i % 3 === 1 ? 'rgba(6, 182, 212, 0.4)' :
                                    'rgba(16, 185, 129, 0.4)'}, 
              transparent 70%)`,
                        boxShadow: `0 0 ${15 + i * 3}px ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.2)' :
                                i % 3 === 1 ? 'rgba(6, 182, 212, 0.2)' :
                                    'rgba(16, 185, 129, 0.2)'
                            }`,
                    }}
                />
            ))}

            {/* Subtle floating dots for mobile too */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`mobile-${i}`}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.8,
                    }}
                    className="absolute rounded-full"
                    style={{
                        width: `${8 + i * 3}px`,
                        height: `${8 + i * 3}px`,
                        left: `${20 + i * 15}%`,
                        top: `${25 + i * 12}%`,
                        background: `radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)`,
                    }}
                />
            ))}

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/50" />
        </div>
    );
};

export default AnimatedBackground;
