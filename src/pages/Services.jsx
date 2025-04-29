import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCogs, FaCode, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Consultoria ERP",
      description: "Especialistas em TOTVS Protheus para otimizar seus processos empresariais"
    },
    {
      icon: <FaCogs className="h-8 w-8 text-blue-600" />,
      title: "Implementação",
      description: "Implementação personalizada de acordo com as necessidades do seu negócio"
    },
    {
      icon: <FaCode className="h-8 w-8 text-blue-600" />,
      title: "Fábrica de Software",
      description: "Desenvolvimento de soluções customizadas e integrações"
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-blue-600" />,
      title: "Otimização",
      description: "Melhoria contínua e otimização de processos existentes"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600">
            Soluções completas para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;