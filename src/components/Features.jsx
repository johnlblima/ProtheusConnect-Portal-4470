import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaCogs, FaLightbulb } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
      title: "Segurança",
      description: "Soluções robustas para proteger seus dados e processos"
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-blue-600" />,
      title: "Performance",
      description: "Otimização para máxima eficiência operacional"
    },
    {
      icon: <FaCogs className="h-8 w-8 text-blue-600" />,
      title: "Integração",
      description: "Conectividade perfeita entre sistemas"
    },
    {
      icon: <FaLightbulb className="h-8 w-8 text-blue-600" />,
      title: "Inovação",
      description: "Soluções tecnológicas de ponta"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a GG Technology?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise técnica combinada com abordagem centrada no cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;