import React from "react";
import { motion } from "framer-motion";

const Mission_intro: React.FC = () => {
  return (
    <section className="pb-24 bg-[#f9f9f9] text-[#050505]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Belief Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h4 className="uppercase text-[#050505] font-semibold tracking-[0.15em]">
            Our Belief
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Love and <span className="text-[#e41e26]">Compassion</span>
          </h2>
          <p className="text-[#050505] leading-relaxed text-lg">
            Believers Gospel Mission is devoted to spreading the love and compassion 
            of Jesus Christ to every corner of the world. Through the Gospel, we bring 
            hope, healing, and transformation to hearts and communities. Love and compassion 
            are not just values — they are our way of life.
          </p>

          <div className="mt-6">
            <a
              href="#get-involved"
              className="inline-block bg-[#e41e26] text-white px-6 py-3  hover:bg-[#174243] transition duration-300"
            >
              Get Involved
            </a>
          </div>
        </motion.div>

        {/* Right Column - Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white shadow-lg   p-10 border-t-8 border-[#e41e26] hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-[#050505] mb-6">
            Our Mission & Vision
          </h3>

          <div className="space-y-5 text-gray-700">
            <p>
              <strong className="text-[#050505]">Vision Statement:</strong>  
              <br />
            Unreached people in Nigeria and abroad will be transformed by the Gospel message and discipled in their new faith.
            </p>

            <p>
              <strong className="text-[#050505]">Mission Statement:</strong>  
              <br />
              To preach the Gospel of Jesus Christ in villages and cities, win souls, 
              plant churches, and disciple believers — equipping ministers both 
              spiritually and economically to fulfill their divine callings.
            </p>

            <p>
              <strong className="text-[#050505]">Celebrate with us —</strong> as we 
              continue to send missionaries, care for widows and orphans, and uplift 
              communities through projects that glorify God.
            </p>
          </div>

          <div className="absolute -top-6 right-10 bg-[#e41e26] text-white px-4 py-1  text-sm shadow-md">
            Faith in Action
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission_intro;
