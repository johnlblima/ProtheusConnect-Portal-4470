import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { value: 150, label: "Clientes Satisfeitos" },
    { value: 98, label: "Projetos Concluídos", suffix: "%" },
    { value: 10, label: "Anos de Experiência", suffix: "+" },
    { value: 24, label: "Consultores Especializados" }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} duration={3} suffix={stat.suffix || ""} />
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;