import React from "react";
import resume from "../../../assets/documents/ida-krause-resume.pdf";

const Resume = () => {

  return (

<section  className="resume-wrapper">
        <div className="row">


          <div className="column-resume">
        <h3 className="resume h3">Skills</h3>
<br />
        <strong>Front-end</strong>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Mobile-responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>CSS3</li>
          </ul>

          <strong>Back-end</strong>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
          </ul>
          <strong>Other</strong>

          <ul className="skills">
            <li>Git</li>
    </ul>
    </div>
        
    <div className="column-resume">
    <h3><a href={resume}>Download Resume</a></h3>
    {/* <p className="resume">View/download complete <a href={resume}>resume PDF</a></p> */}

        </div>


        </div>
</section>

  );
};

export default Resume;
