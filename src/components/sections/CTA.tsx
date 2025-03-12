"use client";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function CTA() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const formFieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const buttonHoverVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="bg-primary-700 text-white py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      transition={{ duration: 0.7 }}
    >
      {/* Futuristic background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-300 blur-3xl"></div>
      </motion.div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Reduce Your Environmental Impact?
            </motion.h2>
            <motion.p
              className="text-primary-100 text-lg mb-8"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join hundreds of manufacturers who have already switched to our
              high-quality recycled plastic pellets. Request a sample today and
              see the quality for yourself.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div variants={buttonHoverVariant} whileHover="hover">
                <Button
                  variant="primary"
                  className="bg-white text-primary-700 hover:bg-primary-500 hover:text-white"
                >
                  Request a Sample
                </Button>
              </motion.div>
              <motion.div variants={buttonHoverVariant} whileHover="hover">
                <Button
                  variant="secondary"
                  className="bg-white text-primary-700 hover:bg-primary-500 hover:text-white"
                >
                  Speak to an Expert
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-lg p-8 bg-white/10 backdrop-blur-md border border-white/20"
            variants={slideInRight}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
          >
            <motion.h3
              className="text-xl font-bold mb-6 text-white"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 8px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Request More Information
            </motion.h3>
            <motion.form variants={formContainer}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div variants={formFieldVariant}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-100 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-500 text-gray-900"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={formFieldVariant}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-100 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-500 text-gray-900"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div className="mb-4" variants={formFieldVariant}>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-primary-100 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-500 text-gray-900"
                  placeholder="Your company"
                />
              </motion.div>

              <motion.div className="mb-4" variants={formFieldVariant}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-100 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-500 text-gray-900"
                  placeholder="Tell us about your needs"
                ></textarea>
              </motion.div>

              <motion.div
                variants={formFieldVariant}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="primary"
                  className="w-full bg-white text-primary-700 hover:bg-primary-500 hover:text-white"
                >
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
