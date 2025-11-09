import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / windowHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              duration: 0.3,
              ease: "easeOut"
            }
          }}
          exit={{ 
            opacity: 0, 
            y: 100, 
            scale: 0.5,
            transition: { 
              duration: 0.3,
              ease: "easeIn"
            }
          }}
          whileHover={{ 
            scale: isMobile ? 1 : 1.15,
            rotate: isMobile ? 0 : -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.9,
            transition: { duration: 0.1 }
          }}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg
            className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-gray-300 dark:text-gray-700"
              opacity="0.3"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-primary"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: scrollProgress / 100 }}
              transition={{ duration: 0.1 }}
              style={{
                pathLength: scrollProgress / 100,
                strokeDasharray: '283',
                strokeDashoffset: `${283 - (283 * scrollProgress) / 100}`,
              }}
            />
          </svg>

          {/* Button Content */}
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-2xl transition-shadow">
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-md opacity-50 group-hover:opacity-75 transition-opacity"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Arrow Icon */}
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="relative z-10 text-white" size={isMobile ? 20 : 24} strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
