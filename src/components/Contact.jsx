import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, User } from 'lucide-react';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.compwallah.com/api/f/sVFV3ffnPx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.',
      });
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      text: 'prasad.dhobale@mitaoe.ac.in', 
      href: 'mailto:prasad.dhobale@mitaoe.ac.in',
      label: 'Email',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Phone, 
      text: '+91 9067404012', 
      href: 'tel:+919067404012',
      label: 'Phone',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: MapPin, 
      text: 'Pune, Maharashtra', 
      href: null,
      label: 'Location',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/PrasadDhobale', label: 'GitHub', color: '#ffffffff' },
    { icon: FaLinkedin, url: 'https://linkedin.com/prasad-dhobale', label: 'LinkedIn', color: '#0A66C2' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Mail className="text-white" size={32} />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: isMobile ? 0 : 10, scale: isMobile ? 1 : 1.02 }}
                  className="group relative"
                >
                  <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-base sm:text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors break-all"
                          >
                            {info.text}
                          </a>
                        ) : (
                          <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                            {info.text}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10`} />
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-all group"
                    style={{ color: social.color }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Available for Work</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Open to new opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl space-y-6 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 pl-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    required
                    disabled={status.submitting}
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 pl-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    required
                    disabled={status.submitting}
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell me about your project or just say hi..."
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400"
                  required
                  disabled={status.submitting}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.submitting}
                whileHover={{ scale: isMobile || status.submitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 shadow-xl transition-all relative overflow-hidden ${
                  status.submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl'
                }`}
              >
                {/* Button Shimmer Effect */}
                {!status.submitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {status.submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-3xl"
                  >
                    <div className="text-center p-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                      >
                        <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl"
                  >
                    <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                    <p className="text-red-700 dark:text-red-400 font-medium">
                      {status.error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
