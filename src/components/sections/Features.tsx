"use client";
import Container from "../ui/Container";
import Image from "next/image";
import { featuresData } from "@/data/features";
import {
  FaRecycle,
  FaWater,
  FaIndustry,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const featureCardVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const processStepVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      id="features"
      className="section bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={slideUp}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            animate={{
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 15px rgba(59, 130, 246, 0.5)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Premium Quality Plastic Pellets
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our recycled plastic pellets are manufactured to the highest
            standards, ensuring consistent quality for your sustainable
            production needs.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-primary-50 rounded-lg p-6 text-center transition-transform hover:translate-y-[-8px]"
              variants={featureCardVariant}
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                {<feature.icon size={32} />}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative" variants={imageReveal}>
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/manufacturing.webp"
                alt="Pellet manufacturing process"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-600/20 to-transparent"
              animate={{
                background: [
                  "linear-gradient(to right, rgba(37, 99, 235, 0.2), transparent)",
                  "linear-gradient(to right, rgba(37, 99, 235, 0.3), transparent)",
                  "linear-gradient(to right, rgba(37, 99, 235, 0.2), transparent)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </motion.div>

          <motion.div
            variants={slideUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6"
              animate={{
                color: ["#15803d", "#22c55e", "#15803d"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Advanced Recycling Process
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our state-of-the-art recycling process transforms plastic waste
              into high-quality pellets through a multi-stage process that
              ensures purity and consistency.
            </motion.p>

            <motion.div className="space-y-4" variants={staggerContainer}>
              {[
                {
                  icon: FaRecycle,
                  title: "Collection & Sorting",
                  description:
                    "Plastic waste is carefully collected and sorted by polymer type.",
                },
                {
                  icon: FaWater,
                  title: "Cleaning & Processing",
                  description:
                    "Advanced washing systems remove contaminants before processing.",
                },
                {
                  icon: FaIndustry,
                  title: "Extrusion & Pelletizing",
                  description:
                    "Melted plastic is extruded and cut into uniform, high-quality pellets.",
                },
                {
                  icon: FaClipboardCheck,
                  title: "Quality Control",
                  description:
                    "Rigorous testing ensures our pellets meet industry standards.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={processStepVariant}
                  whileHover={{ x: 5 }}
                >
                  <motion.div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    <step.icon className="w-4 h-4" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
