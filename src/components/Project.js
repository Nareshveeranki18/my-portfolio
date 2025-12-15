// src/components/Project.js

import React from 'react';

// SVG Component for React Logo
const ReactLogo = () => (
    <svg viewBox="-11.5 -10.232 23 20.464" width="22" height="22" fill="#61DAFB" style={{ verticalAlign: 'middle', marginRight: '5px' }}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);

const Project = () => {
    const projectLink = "https://github.com/NiyazulHasan/JAVA-025-PROJECT";

    return (
        <section>
            <h3 className="section-title">Project</h3>
            <div className="box">
                
                {/* Project Title and Technologies */}
                <strong>Employee Management System</strong> (Client: BridgeSoft)
                <p>
                    Tech Stack: Java 8, Spring Boot, ReactJS, MySQL
                    <br/>
                    Client: BridgeSoft | 
                    
                    {/* Link uses React Logo and opens in a new tab */}
                    <a 
                        href={projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold'}}
                    >
                        <ReactLogo /> View Repository
                    </a>
                </p>

                <hr style={{opacity: 0.1}}/>

                {/* Project Description */}
                <p>
                    The goal of this project was to design and develop a flexible and user-friendly Employee Management system. This software simplifies HR processes for small and medium-sized companies by enabling administrators to manage personnel records efficiently. Key features include the ability to edit employees, add new employees, transfer/promote/terminate employees, and manage employee details.
                </p>

                {/* Key Responsibilities */}
                <strong>Key Responsibilities:</strong>
                <ul>
                    <li>Designed the view layer as per the requirements using React/ReactJS components.</li>
                    <li>Implemented REST APIs using the Spring Boot framework.</li>
                    <li>Wrote the Persistence layer using Spring Data JPA.</li>
                    <li>Tested and validated REST APIs using the Postman tool.</li>
                    <li>Analyzed requirements and assessed their impact on other parts of the application.</li>
                    <li>Updated application configuration files (`application.properties` or `application.yml`) as required for configuration.</li>
                    <li>Collaborated closely with the product owner to clarify requirements.</li>
                </ul>

            </div>
        </section>
    );
};

export default Project;