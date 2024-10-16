import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-10"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-400" />
                <span>kevin.summersill@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-400" />
                <span>Washington D.C. Metro Area</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 transition duration-300" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 transition duration-300" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 transition duration-300" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;