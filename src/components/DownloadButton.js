import React from 'react';
import './Button.css';
import resumePdf from './resume.pdf'

const DownloadButton = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = resumePdf; // Use the imported PDF file
      link.download = 'Resume-Harshala-Rani.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button className="download-button" onClick={handleDownload}>
        DOWNLOAD RESUME IN PDF FORMAT
      </button>
    );
  };
  
  export default DownloadButton;
  
