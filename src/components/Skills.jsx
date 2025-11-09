import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'C', 'C++'],
    },
    {
      title: 'Frameworks',
      skills: ['ReactJS', 'Node.js', 'Django', 'Express.js', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Supabase'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Jenkins', 'Helm', 'ArgoCD', 'GitHub', 'Bitbucket', 'Postman'],
    },
    {
      title: 'Platforms',
      skills: ['Grafana', 'Prometheus', 'Thanos', 'OpenShift'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium hover:from-primary/20 hover:to-secondary/20 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
