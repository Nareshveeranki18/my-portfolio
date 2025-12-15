// src/components/Skills.js

import React from 'react';

const Skills = () => {
    const skillData = [
        { title: 'Frontend', pills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
        { title: 'Backend', pills: ['Java', 'JSP', 'Servlets', 'JDBC', 'Spring Boot'] },
        { title: 'Databases', pills: ['MySQL', 'Oracle'] },
    ];

    return (
        <section>
            <h3 className="section-title">Skills</h3>
            <div className="grid">
                {skillData.map((section, index) => (
                    <div key={index} className="box">
                        <strong>{section.title}</strong><br/>
                        {section.pills.map((pill, pIndex) => (
                            <span key={pIndex} className="pill">{pill}</span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;