import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'GeoTech Solutions',
      content: "Geomatix has revolutionized how we handle geospatial data. Their tools are intuitive and powerful.",
      rating: 5,
    },
    {
      name: 'Jane Smith',
      company: 'EarthScan Inc.',
      content: "The insights we've gained using Geomatix have been invaluable. It's changed our entire approach to data analysis.",
      rating: 5,
    },
    {
      name: 'Mike Johnson',
      company: 'MapMasters',
      content: "I'm impressed by the level of detail and accuracy Geomatix provides. It's become an essential part of our workflow.",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black-2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-pumpkin">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-night p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-pumpkin" size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-davys-gray mb-4">{testimonial.content}</p>
              <div className="font-semibold text-pumpkin">{testimonial.name}</div>
              <div className="text-sm text-davys-gray">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;