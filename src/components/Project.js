import React from 'react';

// NOTE: Ensure your 'Read More' button links to the full details page
const FULL_DETAILS_LINK = "https://my-portfolio-one-gamma-45.vercel.app/projects/ems"; // Replace with your actual project details page URL or route

const EmployeeManagementProject = () => {
  return (
    <div className="card shadow-lg mb-5 bg-white rounded">
      <div className="card-body">
        <h3 className="card-title text-primary mb-3">
          <span role="img" aria-label="Rocket">🚀</span> Featured Project: Employee Management System (EMS)
        </h3>
        <p className="card-text text-muted">
          This project demonstrates my core full-stack capabilities through a comprehensive **Employee Management System (EMS)**.
          The EMS is a robust web application designed for HR management, allowing administrators to efficiently handle personnel records and track employee details.
          It features full **CRUD** functionality and is built with a focus on data integrity and an intuitive user interface, serving as a practical example of my full-stack skills.
        </p>

        <div className="d-flex flex-wrap align-items-center mb-4">
          <strong className="me-3">Key Technologies:</strong>
          <span className="badge bg-danger me-2">Java 8 / Spring Boot</span>
          <span className="badge bg-info me-2">ReactJS / JavaScript</span>
          <span className="badge bg-success me-2">MySQL / JPA</span>
          <span className="badge bg-secondary">Bootstrap 5</span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
            <a href={FULL_DETAILS_LINK} className="btn btn-outline-primary btn-sm me-2">
                <span role="img" aria-label="Book">📖</span> Read More Details
            </a>
            <a href="https://my-portfolio-one-gamma-45.vercel.app/" className="btn btn-success btn-sm" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Globe">🌐</span> View Live Demo
            </a>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagementProject;
