import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

const projects = [
    {
        name: 'Coming Soon',
        badge: 'New Project',
        image: '/images/coming_soon2.jpg',
        skills: [],
        github: 'https://github.com/hamza3454',
        liveDemo: '',
    },
    {
        name: 'Real-time Messenger',
        badge: 'Full Stack Application',
        image: '/images/chatapp2.webp',
        skills: ['Web Sockets', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/hamza3454/chatapp',
    },
    {
        name: 'Champions League Dashboard',
        badge: 'Full Stack Application',
        image: '/images/ucl_dashboard.png',
        skills: ['Next.js', 'Tailwind CSS', 'TypeScript', 'API'],
        github: 'https://github.com/faizm10/CLFantasyManager',
        liveDemo: 'https://cl-fantasy-manager.vercel.app/'
    },
    {
        name: 'Coming Soon',
        badge: 'New Project',
        image: '/images/coming_soon2.jpg',
        skills: [],
        github: 'https://github.com/hamza3454',
        liveDemo: '',
    },
];

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;