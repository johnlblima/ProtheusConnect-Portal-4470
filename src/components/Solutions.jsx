import React from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      title: "Consultoria TOTVS Protheus",
      description: "Implementação e otimização do ERP para seu negócio",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Fábrica de Software",
      description: "Desenvolvimento de soluções personalizadas",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Integração de Sistemas",
      description: "Conecte seu ERP com outras plataformas",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologia avançada para transformar seus processos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={solution.image} 
                alt={solution.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;