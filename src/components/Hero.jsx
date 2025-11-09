import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';
import HeroVisual from './HeroVisual'; // Import the new component

const Hero = () => {
  const isMobile = useIsMobile();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/PrasadDhobale', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/prasad-dhobale', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:prasad.dhobale@mitaoe.ac.in', label: 'Email' },
    { icon: ExternalLink, url: 'https://prasad-dhobale.netlify.app', label: 'Website' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Prasad Dhobale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
          >
            Full Stack Developer | DevOps Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Experienced in building applications using MERN stack, Django, and DevOps tools. 
            Currently working at Amadeus Software Labs on infrastructure monitoring systems.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: isMobile ? 1 : 1.2, rotate: isMobile ? 0 : 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all"
              >
                <link.icon size={isMobile ? 20 : 24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all text-center"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-primary text-primary dark:text-white font-semibold hover:bg-primary hover:text-white transition-all text-center"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Visual - Now visible on mobile too! */}
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
