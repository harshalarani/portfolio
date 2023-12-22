import React from 'react';
import './SkillBar.css'; // Make sure to create this CSS file

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skillbar-container">
      <div className="skillbar-title">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skillbar">
        <div className="skillbar-filled" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
