export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    features?: string[];
    githubUrl?: string;
    liveUrl?: string;
    isEnhanced?: boolean;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
}

export interface ProjectCardProps {
    project: Project;
}