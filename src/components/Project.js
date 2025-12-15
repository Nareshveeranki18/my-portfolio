import React from 'react';

// NOTE: Ensure your Bootstrap CSS and JavaScript are loaded for the Collapse component to work

const EmployeeManagementProjectCondensed = () => {
  // Define links and constants
  const REPOSITORY_LINK = "https://github.com/Nareshveeranki18/My_Portfolio"; // Replace with your actual repository link
  const CLIENT_NAME = "BridgeSoft"; 
  
  const TECH_STACK = [
    { name: 'Java 8', color: 'danger' },
    { name: 'Spring Boot', color: 'success' },
    { name: 'ReactJS', color: 'info' },
    { name: 'MySQL', color: 'primary' },
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg p-3" style={{ maxWidth: '850px', margin: 'auto' }}>
        <div className="card-body">

          {/* === 1. TOP SECTION (Always Visible) === */}
          <div className="mb-4">
            <h3 className="card-title text-success fw-bold">Employee Management System </h3>
            
            {/* Links and Client */}
            <div className="d-flex flex-wrap align-items-center mb-3">
              <span className="me-3 text-muted">Client: {CLIENT_NAME}</span>
              <a 
                href={REPOSITORY_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-dark"
              >
                <i className="bi bi-github me-1"></i> View Repository
              </a>
            </div>
            
            {/* Tech Stack Badges */}
            <div className="d-flex flex-wrap mb-4">
              <strong className="me-2 text-dark">Tech Stack:</strong>
              {TECH_STACK.map((tech, index) => (
                <span key={index} className={`badge bg-${tech.color} me-2 mb-1`}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          
          <hr />

          {/* === 2. CONDENSED PROJECT GOAL (4-5 Lines) === */}
          <div className="mb-3">
            <h5 className="text-secondary mb-2">Project Goal</h5>
            <p className="card-text">
              The goal of this project was to design and develop a flexible and user-friendly Employee Management system. 
              This software simplifies HR processes for small and medium-sized companies by enabling administrators to manage personnel records efficiently. 
              Key features include the ability to edit employees, add new employees, transfer/promote/terminate employees, and manage employee details. 
              <br/>
              {/* This is the end of the condensed description */}
            </p>
          </div>
          
          {/* === 3. READ MORE BUTTON === */}
          <button 
            className="btn btn-primary btn-sm mb-4" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#detailedResponsibilities" 
            aria-expanded="false" 
            aria-controls="detailedResponsibilities"
          >
            <i className="bi bi-caret-down-fill me-1"></i> Read More Details
          </button>


          {/* === 4. COLLAPSIBLE CONTENT (Hidden by default) === */}
          <div className="collapse" id="detailedResponsibilities">
            <div className="card card-body border-0 p-0">
                <hr className="mt-0"/>
                
                {/* Key Responsibilities Section (Detailed) */}
                <div className="mb-4">
                    <h5 className="text-secondary mb-3">Key Responsibilities</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="bi bi-window me-2 text-primary"></i> 
                        Designed the view layer as per the requirements using React/ReactJS components.
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-server me-2 text-primary"></i> 
                        Implemented REST APIs using the Spring Boot framework.
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-database me-2 text-primary"></i> 
                        Wrote the Persistence layer using Spring Data JPA.
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-bug me-2 text-primary"></i> 
                        Tested and validated REST APIs using the Postman tool.
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-clipboard-check me-2 text-primary"></i> 
                        Analyzed requirements and assessed their impact on other parts of the application.
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-file-earmark-code me-2 text-primary"></i> 
                        Updated application configuration files (`application.properties` or `application.yml`) as required for configuration.
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-people me-2 text-primary"></i> 
                        Collaborated closely with the product owner to clarify requirements.
                      </li>
                    </ul>
                </div>
            </div>
          </div> 
          {/* End of Collapsible Content */}

        </div>
      </div>
    </div>
  );
};

export default EmployeeManagementProjectCondensed;
