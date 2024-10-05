import React from 'react';

const Team: React.FC = () => {
  const team = [
    { name: 'Islam Mohammad', role: 'Chief Executive Officer' },
    { name: 'Salim Mohammad', role: 'Chief Financial Officer' },
    { name: 'Ibrahim Musa', role: 'Head of Business Development' },
    { name: 'Ismael Wali', role: 'Chief Technology Officer' },
  ];

  return (
    <section id="team" className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-primary-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary-orange rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-white">{member.name[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-black">{member.name}</h3>
              <p className="text-secondary-dark-gray">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;