import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';

const Contact = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, text: 'prasad.dhobale@mitaoe.ac.in', href: 'mailto:prasad.dhobale@mitaoe.ac.in' },
    { icon: Phone, text: '+91 9067404012', href: 'tel:+919067404012' },
    { icon: MapPin, text: 'Pune, Maharashtra', href: null },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: isMobile ? 0 : 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  {info.href ? (
                    <a href={info.href} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary transition-colors break-all">
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{info.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
