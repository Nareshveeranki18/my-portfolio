// src/components/Certificates.js

import React from 'react';

const Certificates = () => {
    return (
        <section>
            <h3 className="section-title">Certificates & Resume</h3>
            <div className="grid">
                <div className="box">
                    <strong>Java Full Stack Developer Certificate</strong>
                    <p>Professional certification</p>
                    {/* FIXED: Using correct public path for download */}
                    <a href="/java_certificate.pdf" className="btn" download>Download Certificate</a>
                </div>
                <div className="box">
                    <strong>Resume</strong>
                    <p>Latest professional resume</p>
                    {/* FIXED: Using correct public path for download */}
                    <a href="/resume.pdf" className="btn" download>Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Certificates;