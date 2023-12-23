import React from 'react';
import './SkillCircle.css'; // Make sure to create a corresponding CSS file for styling

const SkillCircle = ({ skill, level, percentage, years }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = (percentage / 100) * circumference; // Length of the progress

  return (
    <div className="skill-circle-container">
      <svg width="110" height="120" viewBox="0 0 120 120">
        <circle
          className="circle-background"
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
        />
        <circle
          className="circle-progress"
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="circle-text">
          {percentage}%
        </text>
      </svg>
      <div className="skill-info">
        <strong>{skill}</strong>
        <span>{level}</span>
      </div>
    </div>
  );
};

export default SkillCircle;
