import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'text-red-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/venkatesh',
      href: contactInfo.linkedin,
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/venkatesh',
      href: contactInfo.github,
      color: 'text-gray-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: contactInfo.whatsapp,
      color: 'text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`p-3 rounded-full bg-gray-700/50 ${item.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;