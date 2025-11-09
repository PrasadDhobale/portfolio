import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';

const Experience = () => {
  const isMobile = useIsMobile();

  const experiences = [
    {
      title: 'DevOps Intern',
      company: 'Amadeus Software Labs',
      location: 'Bengaluru, Karnataka',
      period: 'Jan 2025 – Present',
      points: [
        'Designed and deployed a centralized Firewall Capacity Monitoring System using Prometheus, Thanos, and Grafana',
        'Developed Python script to fetch capacity metrics via Panorama APIs',
        'Automated CI/CD workflow using Bitbucket webhooks, Dockerfile, Jenkinsfile, and deployed on OpenShift',
        'Implemented Dashboard-as-Code in GoLang for Grafana',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'Techonsy Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Jun 2024 - Jan 2025',
      points: [
        'Developed and maintained the Learning Management System (LMS)',
        'Collaborated on import-export project utilizing LLM, web scraping, Supabase, Angular, and Node.js',
        'Contributed to team productivity through effective teamwork',
      ],
    },
    {
      title: 'MERN Stack Development Intern',
      company: 'Website Vikreta',
      location: 'Pune, Maharashtra',
      period: 'July 2023 - Sep 2023',
      points: [
        'Focused on ReactJS, MongoDB, Express.js, and Node.js',
        'Enhanced finance tool project with dynamic UIs',
        'Skilled in MongoDB for data management and Express.js/Node.js for server-side',
      ],
    },
    {
      title: 'Full Stack Java Development Intern',
      company: 'Linkcode Technology Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Aug 2021 - Sep 2021',
      points: [
        'Mastered Full Stack Java Development with Core and Advanced Java',
        'Proficient in Servlets, JSP, JSTL and MySQL',
        'Developed strong problem-solving skills with GitHub for version control',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isMobile ? 0 : (idx % 2 === 0 ? -50 : 50), y: isMobile ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: isMobile ? 0 : idx * 0.1 }}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-5/12" />
              
              {/* Timeline Dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <motion.div
                  whileHover={{ scale: isMobile ? 1 : 1.5 }}
                  className="w-4 h-4 rounded-full bg-primary shadow-lg animate-glow"
                />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                className="w-full md:w-5/12 glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase size={20} />
                  <h3 className="text-lg sm:text-xl font-bold">{exp.title}</h3>
                </div>
                
                <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>
                
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <Calendar size={16} />
                  <span>{exp.period} • {exp.location}</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
