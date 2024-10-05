import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-black">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-black">Get in Touch</h3>
            <p className="mb-6 text-secondary-dark-gray">Ready to transform your business and unlock its full potential? Get in touch with us.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-primary-orange mr-2" size={20} />
                <span>Mississippi Street, Maitama, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-orange mr-2" size={20} />
                <span>+234 811 189 1169</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary-orange mr-2" size={20} />
                <a href="mailto:info@geomatix.ng" className="hover:text-primary-orange">info@geomatix.ng</a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-dark-gray mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-secondary-gray border border-secondary-dark-gray text-primary-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-dark-gray mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-secondary-gray border border-secondary-dark-gray text-primary-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-dark-gray mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-secondary-gray border border-secondary-dark-gray text-primary-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;