import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      <Hero />
      <SocialLinks />
      <Projects />
      <Articles />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Venkatesh. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;