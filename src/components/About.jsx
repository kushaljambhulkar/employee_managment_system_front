import React from 'react';

const About = () => {
  return (
    
    <div className="card border-success text-dark mb-3">
    <div className="container mx-auto py-4 px-4">
      <div className="bg-white rounded-md shadow-md p-6">
        <div className="mb-4">
          <h2 className="text-2xl text-center font-bold">About Us</h2>
          <img
            src="/employees.jpg"
            alt="Employees in a row" // Important for accessibility
            className="mb-4 border-success rounded-md" // Added margin and rounded corners for styling
            style={{ maxWidth: '35%', height: 'auto' }} // Added style for responsiveness
          />
          <p className="text-gray-500">Learn more about our Employee Management System</p>
        </div>
        <div>
          <p className="mb-4">
            Our Employee Management System is designed to streamline the process of managing employee records within your organization.
          </p>
          <p className="mb-4">
            With our system, you can easily create, view, update, and delete employee records through a user-friendly interface.
          </p>
          <p>
            The system is built with modern technologies including React for the frontend and Spring Boot for the backend API, providing a robust and scalable solution for your HR needs.
          </p>
        </div>
      </div>
    </div>
    </div>
    
    
  );
};

export default About;