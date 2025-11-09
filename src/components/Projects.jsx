import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';

const Projects = () => {
    const isMobile = useIsMobile();

    const projects = [
        {
            title: 'Firewall Capacity Monitoring System',
            link: '#',
            description: 'Monitoring system for 120+ Palo Alto firewalls using Prometheus, Thanos, and Grafana with automated CI/CD pipeline.',
            tags: ['Python', 'Prometheus', 'Grafana', 'Docker', 'Jenkins', 'OpenShift'],
            gradient: 'from-blue-500 to-purple-500',
        },
        {
            title: 'Smart Examination System',
            link: 'https://github.com/PrasadDhobale/Online-Exam-System',
            description: 'Complete exam management system with security measures, auto-submission, and admin monitoring capabilities.',
            tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Resume Ranker',
            link: 'https://github.com/PrasadDhobale/Resume-Ranker',
            description: 'AI-powered resume ranking system matching candidates with job requirements using percentage-based scoring.',
            tags: ['Python', 'Django', 'Machine Learning', 'NLP'],
            gradient: 'from-pink-500 to-red-500',
        },
        {
            title: 'Electronic Pass - AAI',
            link: 'https://aai.compwallah.com',
            description: 'Multi-level approval system for visitor passes with email notifications and renewal capabilities.',
            tags: ['MERN Stack', 'Email Integration', 'PDF Generation'],
            gradient: 'from-green-500 to-teal-500',
        },
        {
            title: 'Income & Expense Tracker',
            link: 'https://finance.websitevikreta.com',
            description: 'Financial analytics dashboard with multiple graph visualizations for monthly, quarterly, and yearly insights.',
            tags: ['React', 'Chart.js', 'Node.js', 'Express'],
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            title: 'Internship Coordination Portal',
            link: 'https://internship.compwallah.com',
            description: 'Streamlined platform for internship applications, candidate shortlisting, and automated letter generation.',
            tags: ['React', 'MongoDB', 'Express', 'Node.js'],
            gradient: 'from-indigo-500 to-blue-500',
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: isMobile ? 0 : idx * 0.1 }}
                            whileHover={{ y: isMobile ? 0 : -10 }}
                            className="group relative glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-primary/10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    {/* Demo link: prefer project.demo, otherwise use project.link if it's not a GitHub URL */}
                                    {((project.demo) || (project.link && !project.link.includes('github.com'))) ? (
                                        <motion.a
                                            href={project.demo ?? project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:shadow-lg transition-all"
                                            title="Open demo in a new tab"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </motion.a>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-white/70 text-sm font-medium cursor-not-allowed transition-all"
                                            disabled
                                            title="Demo not available"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </motion.button>
                                    )}

                                    {/* Code link: prefer project.code, otherwise use project.link if it's a GitHub URL */}
                                    {((project.code) || (project.link && project.link.includes('github.com'))) ? (
                                        <motion.a
                                            href={project.code ?? project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
                                            title="View source code on GitHub"
                                        >
                                            <Github size={16} />
                                            Code
                                        </motion.a>
                                    ) : null}
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <motion.div
                                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
