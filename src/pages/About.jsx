import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a GG Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excelência em consultoria e desenvolvimento para TOTVS Protheus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <p className="text-gray-600 mb-4">
              A GG Technology nasceu da paixão por tecnologia e da visão de transformar negócios através de soluções inovadoras em TOTVS Protheus. Com anos de experiência no mercado, nos tornamos referência em consultoria e desenvolvimento de soluções ERP.
            </p>
            <p className="text-gray-600">
              Nossa equipe é composta por especialistas certificados e apaixonados por entregar resultados que realmente fazem a diferença para nossos clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
            <p className="text-gray-600 mb-4">
              Fornecer soluções tecnológicas de excelência que impulsionem a eficiência operacional e a competitividade de nossos clientes.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Excelência técnica</li>
              <li>• Compromisso com resultados</li>
              <li>• Inovação constante</li>
              <li>• Parceria com clientes</li>
              <li>• Ética e transparência</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;