import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Palette, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useMediaQuery';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { theme, toggleTheme, changeAccentColor, accentColor } = useTheme();
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const colors = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Green', value: '#10b981' },
    { name: 'Orange', value: '#f59e0b' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Emerald', value: '#059669' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
            className="relative group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {/* Animated Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg"
              >
                <Sparkles className="text-white" size={20} />
              </motion.div>

              {/* Name with Gradient */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Prasad Dhobale
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider">
                  FULL STACK DEVELOPER
                </span>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 bg-gray-100/80 dark:bg-gray-800/80 rounded-full p-1.5 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: 'spring',
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 10,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: isMobile ? 1 : 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow group"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} className="text-amber-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} className="text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>

            {/* Color Picker */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow group"
              >
                <Palette size={20} className="text-primary" />

                {/* Active Color Indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900"
                  style={{ backgroundColor: accentColor }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.button>

              {/* Color Picker Dropdown */}
              <AnimatePresence>
                {showColorPicker && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowColorPicker(false)}
                      className="fixed inset-0 z-40"
                    />

                    {/* Dropdown */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
                      className="absolute right-0 mt-3 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Palette size={16} className="text-primary" />
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          Choose Theme Color
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {colors.map((color) => (
                          <motion.button
                            key={color.name}
                            onClick={() => {
                              changeAccentColor(color.value);
                              setShowColorPicker(false);
                            }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-11 h-11 rounded-xl shadow-lg transition-all relative group ${
                              accentColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600' : ''
                            }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                          >
                            {/* Checkmark for selected color */}
                            {accentColor === color.value && (
                              <motion.svg
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 m-auto w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </motion.svg>
                            )}

                            {/* Hover Tooltip */}
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-semibold px-2 py-1 rounded bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 pointer-events-none">
                              {color.name}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pb-4"
            >
              <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-2 mt-2 border border-gray-200 dark:border-gray-700">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary font-medium transition-all"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      {item.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
