import React from 'react';
import { Laptop, Map, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Laptop className="text-primary-orange" size={32} />,
      title: 'Digital Transformation Consulting',
      description: 'We offer guidance and support for businesses looking to transition to digital operations, providing the resources and expertise needed to succeed in the digital age.',
    },
    {
      icon: <Map className="text-primary-orange" size={32} />,
      title: 'GIS Mapping and Analysis',
      description: 'Leveraging Geographic Information Systems (GIS) technology, we provide valuable insights to help clients make informed decisions and optimize their operations.',
    },
    {
      icon: <BarChart className="text-primary-orange" size={32} />,
      title: 'Business Process Optimization',
      description: 'Our experts help businesses streamline their processes, eliminate bottlenecks, and improve overall efficiency, leading to enhanced productivity and cost savings.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary-gray p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-black">{service.title}</h3>
              <p className="text-secondary-dark-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;