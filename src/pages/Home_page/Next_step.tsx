import React from "react";

const Next_steps_section: React.FC = () => {
  const steps = [
    {
      title: "I Said Yes",
      description:
        "I boldly said yes to God's incredible purpose, embracing a divine destiny.",
      link: "/next-steps/said-yes",
    },
    {
      title: "Prayer Request",
      description:
        "Pray daily and with conviction — embrace God's unfailing loving guidance.",
      link: "/next-steps/prayer-request",
    },
    {
      title: "Baptism",
      description:
        "Baptism welcomes fresh, vibrant new life into God's loving family.",
      link: "/next-steps/baptism",
    },
  ];

  return (
    <section className="py-20  text-center px-6 lg:px-[75px]">
      <h2 className="text-3xl md:text-6xl font-bold mb-12 text-gray-800">
        Next Steps
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white  rounded-xl p-8 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
            </div>
            <div>
              <a
                href={step.link}
                className="inline-block bg-red-700 text-white px-6 py-2 font-semibold hover:bg-red-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Next_steps_section;
