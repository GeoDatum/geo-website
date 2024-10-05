import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      title: 'Crowdfunding System',
      description: 'Developed a concept for managing political campaign supporters for the Buhari Support Organization (BSO) project.',
      image: '/images/screenshots/unit_bank.png'
    },
    {
      title: 'Farm Mapping & Monitoring',
      description: 'Developed a GIS solution for capturing and aggregating farmer farm fields for NIRSAL\'s Farm Smart Project.',
      image: '/images/screenshots/farmer.jpg'
    },
    {
      title: 'Land Administration System',
      description: 'Managed ICT solutions for the Systematic Land Titling and Registration (SLTR) project across various northern states in Nigeria.',
      image: '/images/screenshots/lis.jpg'
    },
    {
      title: 'Mass Distribution System',
      description: 'Developed a system for traceable distribution of relief materials worth ₦70 million for the Insurgency Victim Support Programme (IVSP).',
      image: '/images/screenshots/GIS_layers.jpg'
    },
  ];

  return (
    <section id="success-stories" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-secondary-gray p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary-orange mr-2 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold text-primary-black">{story.title}</h3>
              </div>
              <p className="text-secondary-dark-gray mb-4">{story.description}</p>
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;