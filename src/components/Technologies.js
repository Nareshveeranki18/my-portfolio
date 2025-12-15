// src/components/Technologies.js

import React from 'react';

const Technologies = () => {
    return (
        <section>
            <h3 className="section-title">Technologies</h3>
            <div className="grid">
                <div className="box">
                    <strong>Development Practices</strong>
                    <p>REST APIs, MVC Architecture, CRUD operations</p>
                </div>
                <div className="box">
                    <strong>Tools & Platforms</strong>
        
                    <span className="pill"> Git</span>
                    <span className="pill">GitHub</span>
                    <span className="pill">VS Code</span>
                    <span className="pill">Postman</span>
                    <span className="pill">Apache Tomcat</span>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
