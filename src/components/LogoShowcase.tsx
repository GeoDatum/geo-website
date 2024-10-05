import React from 'react';

const LogoShowcase: React.FC = () => {
  const logos = [
    { name: 'GIZ', src: '/images/logos/giz.svg' },
    { name: 'MTN', src: '/images/logos/mtn.svg' },
    { name: 'AGIX', src: '/images/logos/agix.svg' },
    { name: 'LINX', src: '/images/logos/linx.svg' },
    { name: 'Datum', src: '/images/logos/datum.svg' },
    { name: 'SOIRS', src: '/images/logos/soirs.svg' },
    { name: 'KEBGIS', src: '/images/logos/kebgis.svg' },
    { name: 'Landex', src: '/images/logos/landex.svg' },
    { name: 'NIRSAL', src: '/images/logos/nirsal.svg' },
    { name: 'Sutraq', src: '/images/logos/sutraq.svg' },
    { name: 'Cerebro', src: '/images/logos/cerebro.svg' },
    { name: 'NADFUND', src: '/images/logos/nadfund.svg' },
    { name: 'Verdant', src: '/images/logos/verdant.svg' },
    { name: 'Inteliworx', src: '/images/logos/inteliworx.svg' },
    { name: 'MOF Sokoto', src: '/images/logos/mof_sokoto.svg' },
    { name: 'World Bank', src: '/images/logos/world_bank.svg' },
    { name: 'Metalfinder', src: '/images/logos/metalfinder.svg' },
    { name: 'Kebbi Data Project', src: '/images/logos/kebbi_data_project.svg' },
  ];

  return (
    <section className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">Our Partners and Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={logo.src} alt={logo.name} className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;