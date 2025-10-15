import React from "react";
// import get_involved from '../../assets/hero_banner.jpg'
import { motion } from "framer-motion";

const Mission_into: React.FC = () => {
  return (
 <section className="py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Love & Compassion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-red-700 uppercase tracking-widest font-semibold mb-2">
           Our Belief
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Love and <span className="text-red-700">Compassion</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Believers Gospel Mission is committed to showing the love and compassion of Jesus Christ to the world. We preach the Gospel with grace and truth, reaching the unreached and transforming lives through the power of God’s Word. We believe love and compassion are the heartbeat of true ministry—touching lives, healing hearts, and leading many to salvation in Christ Jesus.
          </p>
        </motion.div>

        {/* Right Column - Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-10 border-l-4 border-red-700"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission & Vision
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Vision Statement:</strong>  
            Unreached people in Nigeria and abroad will be transformed by the Gospel message
            and discipled in their new faith.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Mission Statement:</strong>  
            Preaching the gospel of our Lord Jesus Christ in villages and cities in Nigeria and abroad
            to win souls for Christ; planting churches and discipling believers within these churches;
            preparing and equipping ministers spiritually and economically to enable them to function
            effectively in their callings.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Celebrate with us</strong> — as we continue to send out missionaries to areas where the
            impact of the Gospel is lacking, provide for the needs of widows and orphans, and establish
            projects that uplift communities and glorify God.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission_into;
