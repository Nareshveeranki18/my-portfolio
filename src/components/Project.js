import React from 'react';
// Note: Ensure Bootstrap CSS and Bootstrap Icons are included in your overall project setup.

const ProjectDetails = () => {
  // Constants derived from the screenshot content
  const REPOSITORY_LINK = "https://github.com/Nareshveeranki18/My_Portfolio"; // Placeholder for your GitHub link
  const TECH_STACK = "Java 8, Spring Boot, ReactJS, MySQL";
  const CLIENT_NAME = "BridgeSoft";

  return (
    <div className="container mt-5">
      {/* Outer Project Title/Heading */}
      <h2 className="mb-4" style={{ color: '#00cc66' }}>Project</h2>

      {/* Main Card Container */}
      {/* Styling mimics the dark background shown in the screenshot */}
      <div className="card text-white p-4" style={{ backgroundColor: '#202334', border: 'none' }}>
        <div className="card-body p-0">
          
          {/* Header/Title Block */}
          <div className="mb-3">
            <h4 className="card-title fw-bold" style={{ color: '#fff' }}>
              Employee Management System <span className="text-muted">(Client: {CLIENT_NAME})</span>
            </h4>
            <p className="card-text mb-1" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Tech Stack: {TECH_STACK}
            </p>
            <div className="d-flex align-items-center">
              <span className="me-3" style={{ fontSize: '0.9rem', opacity: 0.8 }}>Client: {CLIENT_NAME}</span>
              <a 
                href={REPOSITORY_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-light" 
                style={{ borderColor: '#00cc66', color: '#00cc66' }}
              >
                <i className="bi bi-github me-1"></i> View Repository
              </a>
            </div>
          </div>
          
          {/* Goal/Overview Section */}
          <div className="mb-4 pt-3 border-top" style={{ borderColor: '#444' }}>
            <p className="card-text">
              The goal of this project was to design and develop a flexible and user-friendly Employee Management system. 
              This software simplifies HR processes for small and medium-sized companies by enabling administrators to manage personnel records efficiently. 
              Key features include the ability to edit employees, add new employees, transfer/promote/terminate employees, and manage employee details.
            </p>
          </div>

          {/* Key Responsibilities Section */}
          <div>
            <h5 className="fw-bold mb-3" style={{ color: '#fff' }}>Key Responsibilities:</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Designed the view layer as per the requirements using React/ReactJS components.
              </li>
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Implemented REST APIs using the Spring Boot framework.
              </li>
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Wrote the Persistence layer using Spring Data JPA.
              </li>
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Tested and validated REST APIs using the Postman tool.
              </li>
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Analyzed requirements and assessed their impact on other parts of the application.
              </li>
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Updated application configuration files (`application.properties` or `application.yml`) as required for configuration.
              </li>
              <li className="mb-2">
                <i className="bi bi-dot me-2" style={{ color: '#00cc66' }}></i> 
                Collaborated closely with the product owner to clarify requirements.
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
