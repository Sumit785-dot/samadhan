import { motion } from 'framer-motion';
import { Award, Code2, FileCode, Braces, Terminal, Database } from 'lucide-react';

const certifications = [
    { name: 'HTML', icon: Code2, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: FileCode, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: Braces, color: 'from-yellow-400 to-yellow-600' },
    { name: 'C++', icon: Terminal, color: 'from-blue-500 to-purple-500' },
    { name: 'Python', icon: Terminal, color: 'from-green-400 to-blue-500' },
    { name: 'Django', icon: Database, color: 'from-emerald-500 to-green-600' },
];

const Certifications = () => {
    return (
        <section className="section bg-navy-950 relative overflow-hidden">
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
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle">
                        Professional certifications validating my technical expertise
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass rounded-2xl p-6 flex flex-col items-center gap-3 min-w-[140px] cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                                <cert.icon size={28} className="text-white" />
                            </div>
                            <span className="font-semibold text-white">{cert.name}</span>
                            <div className="flex items-center gap-1 text-xs text-slate-400">
                                <Award size={12} className="text-yellow-500" />
                                Certified
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
