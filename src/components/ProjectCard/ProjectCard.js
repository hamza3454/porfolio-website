import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} />
            <h3 className="project-title">{project.name}</h3>
            <span className="project-badge">{project.badge}</span>
            <div className="project-languages">
                {project.skills.map((skill, index) => (
                    <div key={index} className="skill-chip">{skill}</div>
                ))}
            </div>
            <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
        </div>
    );
}

export default ProjectCard;
