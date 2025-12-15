// src/components/Hero.js

import React from 'react';

// SVG components (same as before)
const GitHubIcon = () => (<svg viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.7-.8 2.1-1.2-.9-.1-1.9-.4-2.6-1.1-.7-.7-1.1-1.8-1.1-3.1 0-.9.3-1.7.8-2.3-.1-.2-.3-1.2.1-2.4 0 0 .7-.2 2.4.9.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.7-1.1 2.4-.9 2.4-.9.4 1.2.2 2.2.1 2.4.5.6.8 1.4.8 2.3 0 1.3-.4 2.4-1.1 3.1-.7.7-1.7 1-2.6 1.1.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.8 18.3.5 12 .5z"/></svg>);
const LinkedInIcon = () => (<svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4v9.6h-4v-8.5c0-2-.1-4.5-2.8-4.5-2.8 0-3.2 2.1-3.2 4.3v8.7h-4v-16z"/></svg>);

const Hero = () => {
    return (
        <div className="hero">
            <img 
                src="/profile.png" 
                alt="Veeranki Naresh Babu Profile " 
                className="avatar-photo" 
            />
            
            <div>
                <h1>Veeranki Naresh Babu</h1>
                <h2>Java Full Stack Developer</h2>

                <div className="socials">
                    {/* ADDED: target="_blank" and rel="noopener noreferrer" */}
                    <a 
                        className="social-link" 
                        href="https://github.com/Nareshveeranki18" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon /> GitHub
                    </a>
                    
                    {/* ADDED: target="_blank" and rel="noopener noreferrer" */}
                    <a 
                        className="social-link" 
                        href="https://www.linkedin.com/in/veerankinaresh/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon /> LinkedIn
                    </a>
                    
                    <a className="social-link" href="mailto:nareshveeranki09@gmail.com">Email</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;