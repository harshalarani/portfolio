// ExperienceSection.js
import React from 'react';
import './ExperienceSection.css'; // You can also create a separate CSS file for this component

const ExperienceSection = ({ title, dateRange, jobTitle, details }) => (
  <div className="experience-section">
    <div className="marker"></div>
    <div className="content">
      <h2>{title}</h2>
     
      <h3>{jobTitle}</h3>
     
    </div>
  </div>
);

export default ExperienceSection;
