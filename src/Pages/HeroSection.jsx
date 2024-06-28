import React from "react";
import img from "../img/hero_img.jpg"
function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Kedarnath Tripathi</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Front End</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            "Explore my portfolio showcasing elegant front-end solutions, where design meets functionality seamlessly. With a focus on user experience and responsive design, I create engaging web experiences that leave a lasting impression."
            </p>
          </div>
        </div>
        <div className="hero--section--img">
          <img src={img} alt="Hero Section" />
        </div>
      </section>
    );
  }
  export default HeroSection