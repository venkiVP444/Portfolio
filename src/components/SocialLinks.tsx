import React from 'react';
import { Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const iconMap = {
  Github,
  Linkedin,
  Send,
  Facebook,
  Instagram
};

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow me on social media and let's build something amazing together
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {link.platform}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;