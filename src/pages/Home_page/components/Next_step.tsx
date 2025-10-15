import React from "react";
import { motion } from "framer-motion";
import { Heart, Droplets, Hand } from "lucide-react"; // you can swap icons if needed

const NextStepsSection :React.FC = () => {
  const steps = [
    {
      icon: <Hand className="w-10 h-10 text-red-700" />,
      title: "I Said Yes",
      description:
        "I boldly said yes to God's incredible purpose, embracing a divine destiny.",
      link: "/next-steps/said-yes",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-700" />,
      title: "Prayer Request",
      description:
        "Pray daily and with conviction — embracing God's unfailing love and guidance.",
      link: "/next-steps/prayer-request",
    },
    {
      icon: <Droplets className="w-10 h-10 text-red-700" />,
      title: "Baptism",
      description:
        "Baptism welcomes fresh, vibrant new life into God's loving family.",
      link: "/next-steps/baptism",
    },
  ];

  return (
    <section className="py-20 text-center px-6 lg:px-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-12 text-gray-900"
      >
        Next Steps
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-black/80 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center p-10"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full mb-6">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 mb-8 leading-relaxed">
              {step.description}
            </p>

            {/* Button */}
            <a
              href={step.link}
              className="inline-block bg-red-700 text-white px-6 py-2  font-medium hover:bg-red-800 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NextStepsSection;
