import React from 'react';
import { Map, BarChart, Layers, Cloud } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Map className="text-pumpkin" size={32} />,
      title: 'Advanced Mapping',
      description: 'Create stunning, interactive maps with ease using our powerful mapping tools.',
    },
    {
      icon: <BarChart className="text-pumpkin" size={32} />,
      title: 'Data Visualization',
      description: 'Transform complex geospatial data into clear, actionable insights with our visualization suite.',
    },
    {
      icon: <Layers className="text-pumpkin" size={32} />,
      title: 'Multi-layer Analysis',
      description: 'Perform in-depth analysis across multiple data layers for comprehensive understanding.',
    },
    {
      icon: <Cloud className="text-pumpkin" size={32} />,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with cloud platforms for scalable and efficient data processing.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-night">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-pumpkin">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black-2 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-pumpkin">{feature.title}</h3>
              <p className="text-davys-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;