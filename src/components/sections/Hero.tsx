"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const popUp = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const statsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const statsItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative bg-primary-50 py-16 md:py-24 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.7 }}
    >
      <Container className="relative bg-primary z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Sustainable{" "}
              <motion.span
                className="text-primary-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Recycled Plastic
              </motion.span>{" "}
              Pellets
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 mb-8 max-w-lg"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              High-quality recycled plastic pellets for eco-friendly
              manufacturing. Reduce your carbon footprint without compromising
              on quality.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="primary">Request a Sample</Button>
              <Button variant="secondary">Learn More</Button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-8"
              variants={statsContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="flex flex-col items-center"
                variants={statsItem}
              >
                <span className="text-3xl font-bold text-primary-600">99%</span>
                <span className="text-sm text-gray-600">Pure Recycled</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                variants={statsItem}
              >
                <span className="text-3xl font-bold text-primary-600">6+</span>
                <span className="text-sm text-gray-600">Plastic Types</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                variants={statsItem}
              >
                <span className="text-3xl font-bold text-primary-600">
                  50k+
                </span>
                <span className="text-sm text-gray-600">Tons Produced</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="relative h-64 sm:h-80 md:h-96"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/recycled-pellets.jpeg"
                alt="Recycled plastic pellets"
                fill
                className="object-cover rounded-lg shadow-lg w-[800px]"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              variants={popUp}
              transition={{
                duration: 0.5,
                delay: 0.9,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="bg-green-100 p-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600"
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
                </motion.div>
                <div>
                  <p className="text-sm font-semibold">Certified Quality</p>
                  <p className="text-xs text-gray-500">ISO 9001:2015</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 z-5 w-1/3 h-full bg-primary-200 rounded-bl-full opacity-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.div>
    </motion.section>
  );
}
