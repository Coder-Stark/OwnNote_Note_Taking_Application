import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About OwnNote</h1>
      <p>OwnNote is a note-taking application built with the MERN stack (MongoDB, Express, React, and Node.js). It allows users to sign up, log in, and manage their notes.</p>
      <h2>Features</h2>
      <ul>
        <li>Add notes</li>
        <li>Delete notes</li>
        <li>Update notes</li>
      </ul>
      <h2>Backend</h2>
      <p>OwnNote's backend is built with Node.js and Express. It provides API endpoints for creating, reading, updating, and deleting notes.</p>
      <h2>Get Started</h2>
      <p>To use OwnNote, please <Link to="/signup">sign up</Link> or <Link to="/login">log in</Link>.</p>
    </div>
  );
};

export default About;
