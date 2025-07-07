import React from 'react';
import { ArrowRight, Code, Server, Database, ShoppingCart } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        {/* Animated Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            Full-stack{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Developer
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                            Specializing in .NET Core, React, and e-commerce solutions. I build scalable applications with clean architecture and modern technologies.
                        </p>

                        {/* Tech Stack Icons */}
                        <div className="flex justify-center lg:justify-start space-x-6 mb-12">
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                                <Code className="h-5 w-5 text-cyan-400" />
                                <span className="text-gray-300 text-sm">Frontend</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                                <Server className="h-5 w-5 text-green-400" />
                                <span className="text-gray-300 text-sm">Backend</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                                <Database className="h-5 w-5 text-purple-400" />
                                <span className="text-gray-300 text-sm">Database</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                                <ShoppingCart className="h-5 w-5 text-orange-400" />
                                <span className="text-gray-300 text-sm">E-commerce</span>
                            </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="bg-gray-800/30 rounded-2xl p-6 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-cyan-400 mb-1">4+</div>
                                    <div className="text-gray-300 text-sm">Projects Completed</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-purple-400 mb-1">2+</div>
                                    <div className="text-gray-300 text-sm">Years Experience</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="group inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                            >
                                <span>View Projects</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;