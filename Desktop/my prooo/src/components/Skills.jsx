import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        color: 'from-blue-500 to-blue-600',
        skills: ['C', 'C++', 'Python', 'Java', 'JavaScript',],
    },
    {
        title: 'Frontend',
        color: 'from-cyan-500 to-cyan-600',
        skills: ['React.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        title: 'Backend',
        color: 'from-emerald-500 to-emerald-600',
        skills: ['Django', 'Node.js', 'Express.js', 'Flask', 'FastAPI'],
    },
    {
        title: 'Mobile App Development',
        color: 'from-rose-500 to-rose-600',
        skills: ['React Native', 'Supabase'],
    },
    {
        title: 'Databases',
        color: 'from-purple-500 to-purple-600',
        skills: ['MongoDB', 'SQLite', 'Supabase', 'MySQL', 'PostgreSQL'],
    },
    {
        title: 'AI/ML',
        color: 'from-pink-500 to-pink-600',
        skills: ['OpenAI API', 'Google Gemini API', 'HuggingFace API'],
    },
    {
        title: 'Data Science',
        color: 'from-teal-500 to-teal-600',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    },
    {
        title: 'Tools',
        color: 'from-orange-500 to-orange-600',
        skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
    },
    {
        title: 'Other',
        color: 'from-indigo-500 to-indigo-600',
        skills: ['Azure TTS', 'Eleven Labs TTS'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section bg-navy-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 particles-bg opacity-50" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies and tools I work with to build amazing projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="glass rounded-2xl p-6 card-hover"
                        >
                            <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-6`}>
                                {category.title}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
