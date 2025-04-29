import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Transformando negócios com <span className="text-blue-600">TOTVS Protheus</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Consultoria especializada e soluções tecnológicas para impulsionar sua empresa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700"
            >
              Conheça nossos serviços
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-50"
            >
              Fale com um especialista
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;