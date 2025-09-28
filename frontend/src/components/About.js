import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About OwnNote</h1>
      <p className="mb-6">
        OwnNote is a secure and user-friendly note-taking application built with the 
        <strong> MERN stack (MongoDB, Express, React, and Node.js)</strong>. 
        It enables users to create and manage their personal notes while ensuring 
        smooth authentication and data security.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Signup and login using <strong>Email & Password</strong>.</li>
        <li>JWT-based authorization for secure note creation and deletion.</li>
        <li>Add and delete notes easily after logging in.</li>
        <li>Displays proper error messages for invalid inputs or API failures.</li>
        <li>Mobile-friendly design, closely matching the provided UI reference.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Backend & Security</h2>
      <p className="mb-6">
        The backend is built with <strong>Node.js</strong> and <strong>Express</strong>, providing secure 
        REST APIs for user authentication and note management. 
        <strong> JWT tokens</strong> ensure that only authorized users can create or delete notes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
      <p>
        To start using OwnNote, please <Link to="/signup" className="text-blue-600 underline">sign up</Link> 
        or <Link to="/login" className="text-blue-600 underline">log in</Link> with your preferred method.
      </p>
    </div>
  );
};

export default About;
