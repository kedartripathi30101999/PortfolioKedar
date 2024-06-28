import React from 'react';
import img from "../img/resume_img.png";
import pdf from "../img/Resume_kedar.pdf";
const ResumeSection = () => {
  const resumePdfUrl = pdf; 

  const handleViewResume = () => {
  
    window.open(resumePdfUrl, '_blank');
  };

  const handleDownloadResume = () => {
 
    const link = document.createElement('a');
    link.href = resumePdfUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-section" id='resume'>
      <div className="left">
        <img src={img} alt="Profile" />
      </div>
      <div className="right">
        <h2 style={{ marginBottom: '10px' }}>View and Download Resume</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>Here goes the description or any other content...</p>
        <div className="resume-actions" style={{ marginTop: '20px' }}>
          <button className="view" onClick={handleViewResume} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>View Resume</button>
          <button className="download" onClick={handleDownloadResume} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Download Resume</button>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;