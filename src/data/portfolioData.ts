import { Project, SocialLink, ContactInfo } from '../types';

export const projects: Project[] = [
    {
        id: 'ugrolife',
        title: 'UGroLife - Microgreens E-commerce Platform',
        description: 'Full-stack e-commerce platform for microgreens with user authentication, cart management, payment integration, and automated customer communication.',
        technologies: ['.NET Core MVC', 'MySQL', 'Razorpay', 'Bootstrap', 'JavaScript', 'Email OTP'],
        isEnhanced: true,
        features: [
            'User Registration & Login with Email OTP Verification',
            'Product Catalog with Microgreens Inventory Management',
            'Shopping Cart with Add/Remove/Update Functionality',
            'Secure Payment Integration with Razorpay Gateway',
            'Contact Form with Automated Email Responses',
            'Order Management System with Status Tracking',
            'Responsive Design for Mobile and Desktop',
            'Admin Panel for Product and Order Management',
            'MySQL Database with Entity Framework Core',
            'Deployed on SmartASP.NET hosting platform'
        ],
        githubUrl: 'https://github.com/venkiVP444/ugrolife',
        liveUrl: 'https://www.smarterasp.net/'
    },
    {
        id: 'bijliride',
        title: 'Bijliride',
        description: 'EV rental platform with seamless booking flow and real-time updates.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        githubUrl: 'https://github.com/venkiVP444/bijliride',
        liveUrl: 'https://bijliride.com'
    },
    {
        id: 'billsplit',
        title: 'BillSplit',
        description: 'A modern Android app for managing shared expenses using Flutter.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
        isEnhanced: true,
        features: [
            'Login, Signup, Logout with Firebase Authentication',
            'Create Groups and Add People for shared tracking',
            'Store all expenses in Firebase Cloud Firestore',
            'Add bills using text input and scanner',
            'Visualize spending via Pie Chart (fl_chart)',
            'Filter expenses by date range',
            'Add custom categories for each expense',
            'Smart settlement logic to show who owes whom'
        ],
        githubUrl: 'https://github.com/venkiVP444/billsplit'
    },
    {
        id: 'credit-score',
        title: 'Credit Score Verifier',
        description: '.NET MVC tool to validate credit scores using Oracle DB and Maker-Checker workflow.',
        technologies: ['.NET MVC', 'Oracle DB', 'C#', 'Entity Framework'],
        githubUrl: 'https://github.com/venkiVP444/credit-score-verifier'
    }
];

export const socialLinks: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com/venkiVP444', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/venkatesh-t-0953792a7/', icon: 'Linkedin' },
    { platform: 'Telegram', url: 'https://t.me/venkatesh', icon: 'Send' },
    { platform: 'Facebook', url: 'https://facebook.com/venkatesh', icon: 'Facebook' },
    { platform: 'Instagram', url: 'https://instagram.com/venkatesh', icon: 'Instagram' }
];

export const contactInfo: ContactInfo = {
    email: 'dev98venkatesh27@gmail.com',
    linkedin: 'https://www.linkedin.com/in/venkatesh-t-0953792a7/',
    github: 'https://github.com/venkiVP444',
    whatsapp: 'https://wa.me/918072730437'
};