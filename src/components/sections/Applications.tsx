"use client";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Image from "next/image";
import { applicationsData } from "@/data/applications";
import { FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Applications() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const customSectionVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  };

  const listItemVariant = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <motion.section
      id="applications"
      className="section bg-primary-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Applications of Recycled Pellets
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our high-quality recycled plastic pellets can be used across various
            industries to create sustainable products without sacrificing
            performance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {applicationsData.map((app) => (
            <motion.div key={app.id} variants={cardVariant}>
              <Card className="h-full transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {app.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-100 text-primary-700 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-white rounded-lg p-8 shadow-md"
          variants={customSectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Custom Applications</h3>
              <p className="text-gray-600 mb-6">
                Need recycled pellets for a specific application? Our team can
                customize pellet formulations to meet your exact specifications.
              </p>
              <motion.ul
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.li
                  className="flex items-start gap-3"
                  variants={listItemVariant}
                >
                  <svg
                    className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom color matching and additive formulations</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  variants={listItemVariant}
                >
                  <svg
                    className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Specialized performance characteristics</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  variants={listItemVariant}
                >
                  <svg
                    className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Industry-specific requirements and certifications</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  variants={listItemVariant}
                >
                  <svg
                    className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Small batch production for testing and development
                  </span>
                </motion.li>
              </motion.ul>
            </div>

            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <FaCogs className="h-10 w-10 text-primary-600" />
                </motion.div>
                <p className="font-semibold mb-2">Start a Custom Project</p>
                <motion.button
                  className="text-primary-600 text-sm font-medium flex items-center justify-center gap-1 mx-auto hover:text-primary-700"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Contact our team
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
