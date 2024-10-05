import React from 'react';
import { Globe, MapPin, Database } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Globe className="text-primary-orange" size={32} />,
      title: 'AGIX',
      description: 'Our flagship product designed to help businesses automate traditional processes and maximize efficiency using geospatial technologies and data analytics.',
    },
    {
      icon: <MapPin className="text-primary-orange" size={32} />,
      title: 'Landex',
      description: 'A comprehensive platform that streamlines land registration, title issuance, and property transactions while ensuring data accuracy and compliance.',
    },
    {
      icon: <Database className="text-primary-orange" size={32} />,
      title: 'Datum',
      description: 'Empowering businesses to automate and optimize their processes, reducing manual intervention and human error.',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-primary-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-black">{solution.title}</h3>
              <p className="text-secondary-dark-gray">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;