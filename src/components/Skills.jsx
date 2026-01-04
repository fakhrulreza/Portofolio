import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Brain, BarChart3 } from 'lucide-react';

const Skills = () => {
    const webSkills = [
        { name: 'React.js', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Laravel', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'HTML/CSS', level: 'Expert' },
        { name: 'REST APIs', level: 'Intermediate' },
    ];

    const dataSkills = [
        { name: 'Python', level: 'Intermediate' },
        { name: 'SQL / MySQL', level: 'Intermediate' },
        { name: 'Data Science', level: 'Intermediate' },
        { name: 'Data Analyst', level: 'Intermediate' },
        { name: 'Machine Learning', level: 'Beginner' },
        { name: 'Tensorflow', level: 'Intermediate' },
        { name: 'Pandas/NumPy', level: 'Intermediate' },
    ];

    const SkillCard = ({ title, icon: Icon, skills, color }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
        >
            <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-sm font-medium border border-white/10 hover:bg-primary/20 hover:text-white hover:border-primary/30 transition-colors cursor-default"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="py-20 bg-theme-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">Blending the art of web development with the science of data.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <SkillCard
                        title="Web Development"
                        icon={Layout}
                        skills={webSkills}
                        color="primary"
                    />
                    <SkillCard
                        title="Big Data & AI"
                        icon={Brain}
                        skills={dataSkills}
                        color="secondary"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
