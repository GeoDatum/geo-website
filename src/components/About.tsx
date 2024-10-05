import React from 'react';
import { Globe, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">About Geomatix</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-white p-6 rounded-lg shadow-md">
            <Globe className="text-primary-orange mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-primary-black">Our Vision</h3>
            <p className="text-secondary-dark-gray">
              To revolutionize the modern business landscape by empowering companies of all sizes to take advantage of the digital age and unlock new levels of productivity and efficiency.
            </p>
          </div>
          <div className="bg-primary-white p-6 rounded-lg shadow-md">
            <Users className="text-primary-orange mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-primary-black">Our Mission</h3>
            <p className="text-secondary-dark-gray">
              We are dedicated to helping businesses make the transition to digital transformation as quickly and efficiently as possible, providing the resources, guidance, and support needed to automate traditional business processes.
            </p>
          </div>
          <div className="bg-primary-white p-6 rounded-lg shadow-md">
            <Zap className="text-primary-orange mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-primary-black">Our Commitment</h3>
            <p className="text-secondary-dark-gray">
              Established in 2016, we are committed to helping businesses transition to digital transformation swiftly and efficiently, enabling organizations to maximize their potential and stay competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;