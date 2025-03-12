"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { pricingData } from "@/data/pricing";

export default function Pricing() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="pricing"
      className="section bg-white"
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
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your production needs, from small
            batches to industrial scale. All plans include quality certification
            and technical support.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`rounded-lg p-8 border ${
                plan.popular
                  ? "border-primary-600 shadow-lg relative"
                  : "border-gray-200"
              }`}
              variants={cardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-0 right-0 bg-primary-600 text-white py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Most Popular
                </motion.div>
              )}

              <motion.h3 className="text-xl font-bold mb-2" variants={fadeIn}>
                {plan.name}
              </motion.h3>
              <motion.p className="text-gray-600 mb-6" variants={fadeIn}>
                {plan.description}
              </motion.p>

              <motion.div className="mb-6" variants={fadeIn}>
                <span className="text-4xl font-bold">₦{plan.price}</span>
                <span className="text-gray-600">/{plan.unit}</span>
                <p className="text-sm text-gray-500 mt-1">
                  {plan.minimumOrder}
                </p>
              </motion.div>

              <motion.div className="mb-8" variants={fadeIn}>
                <p className="text-sm font-medium text-gray-800 mb-3">
                  Includes:
                </p>
                <motion.ul
                  className="space-y-3"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-sm"
                      variants={featureVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg
                        className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5"
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
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-primary-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-8" variants={fadeIn}>
            <motion.h3
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Need a Custom Quote?
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              For large volumes or specific requirements, our team can prepare a
              custom quote.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary">Contact Sales</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary">Download Price List</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
