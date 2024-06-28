import React from 'react';
import data from '../ProjectData';

import img from '../img/github.png'; 

const MyProjects = () => {
  return (
    <section className="portfolio--section" id="MyProjects">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading" style={{ color: 'cornflowerblue' }}>My Projects</h2>
        </div>
        <div>
          <a href="https://github.com/kedartripathi30101999" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn btn-github">
              <img src={img} alt="GitHub Logo" />
              Visit My GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Project Screenshot" /> {/* Ensure correct mapping */}
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-view-github">View on GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
