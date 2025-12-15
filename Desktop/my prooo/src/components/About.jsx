import { motion } from 'framer-motion';
import {
    GraduationCap,
    Code2,
    Trophy,
    Briefcase,
    MapPin,
    User,
    Users
} from 'lucide-react';
import profileImage from './photo/about/about.jpeg';

const highlights = [
    {
        icon: GraduationCap,
        title: 'B.Tech CSE',
        description: 'SAGAR INSTITUTE OF SCIENCE AND TECHNOLOGY (2023-2027)',
    },
    {
        icon: Code2,
        title: 'Full-Stack Developer',
        description: 'Specializing in React.js, Django, and AI integration',
    },
    {
        icon: Trophy,
        title: 'Hackathon Winner',
        description: 'Multiple hackathon victories with innovative solutions',
    },
    {
        icon: Users,
        title: 'Team Leader',
        description: 'Led 4+ hackathon teams to success with strong leadership',
    },
    {
        icon: Briefcase,
        title: 'Freelance Developer',
        description: 'Mobile app development with React Native',
    },
];

const About = () => {
    return (
        <section id="about" className="section bg-navy-900 relative overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
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
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        A passionate developer dedicated to creating impactful digital solutions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Photo + About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Profile Photo */}
                        <div className="flex justify-center lg:justify-start mb-8">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative"
                            >
                                {/* Glowing border effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 blur-lg opacity-50 animate-pulse" />

                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-slate-700 glass">
                                    <img
                                        src={profileImage}
                                        alt="Sumit Mewada"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Use placeholder image if original fails to load
                                            e.target.onerror = null; // Prevent infinite loop
                                            e.target.src = '/placeholder.jpg';
                                        }}
                                    />
                                    {/* Placeholder icon (shows if image fails to load) */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600 -z-10">
                                        <User size={80} className="text-white/80" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="glass rounded-2xl p-8">
                            <p className="text-slate-300 leading-relaxed text-lg">
                                I'm <span className="text-white font-semibold">Sumit Mewada</span>, a dedicated
                                Computer Science Engineering student with a passion for building innovative
                                digital solutions. Currently pursuing my B.Tech at SAGAR INSTITUTE OF SCIENCE
                                AND TECHNOLOGY, I specialize in full-stack development with expertise in React.js,
                                Django, and AI integration.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-lg mt-4">
                                With experience in leading hackathon teams to victory and delivering real-world
                                solutions, I bring both technical expertise and leadership skills to every project.
                                My freelance work in mobile app development further demonstrates my versatility
                                and commitment to client success.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-slate-400">
                                <MapPin size={18} className="text-blue-400" />
                                <span>Bhopal, Madhya Pradesh, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass rounded-xl p-6 card-hover"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                                    <item.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
