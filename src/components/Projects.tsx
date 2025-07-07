import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Smartphone, ShoppingCart, CreditCard, Mail } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project, ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getProjectIcon = (projectId: string) => {
        switch (projectId) {
            case 'ugrolife':
                return <ShoppingCart className="h-5 w-5 text-green-400 flex-shrink-0" />;
            case 'billsplit':
                return <Smartphone className="h-5 w-5 text-cyan-400 flex-shrink-0" />;
            default:
                return project.isEnhanced ? <Smartphone className="h-5 w-5 text-cyan-400 flex-shrink-0" /> : null;
        }
    };

    const getProjectGradient = (projectId: string): string => {
        switch (projectId) {
            case 'ugrolife':
                return 'bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent';
            case 'billsplit':
                return 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent';
            default:
                return project.isEnhanced
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'
                    : 'text-white';
        }
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-semibold ${getProjectGradient(project.id)}`}>
                        {project.title}
                    </h3>
                    {getProjectIcon(project.id)}
                </div>

                <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.features && (
                    <div className="mb-4">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            {project.id === 'ugrolife' ? (
                                <ShoppingCart className="h-4 w-4" />
                            ) : (
                                <Smartphone className="h-4 w-4" />
                            )}
                            <span className="text-sm font-medium">
                                {isExpanded ? 'Hide Features' : 'View Features'}
                            </span>
                            {isExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                            ) : (
                                <ChevronDown className="h-4 w-4" />
                            )}
                        </button>

                        {isExpanded && (
                            <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
                                <div className="space-y-2">
                                    {project.features.map((feature: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-2 text-sm text-gray-300"
                                        >
                                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${project.id === 'ugrolife' ? 'bg-green-400' : 'bg-cyan-400'
                                                }`}></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="flex space-x-4 mt-auto">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            <span className="text-sm">Code</span>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            <span className="text-sm">Live</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Here are some of my recent projects showcasing full-stack development, e-commerce solutions, and mobile applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Technology Highlights */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-8">Technologies & Expertise</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <CreditCard className="h-8 w-8 text-green-400 mx-auto mb-2" />
                            <p className="text-gray-300 text-sm">Payment Integration</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <Mail className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                            <p className="text-gray-300 text-sm">Email Automation</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <ShoppingCart className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                            <p className="text-gray-300 text-sm">E-commerce Solutions</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <Smartphone className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                            <p className="text-gray-300 text-sm">Mobile Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;