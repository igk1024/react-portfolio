import React from 'react';
import selfImage from "../../../assets/images/me.png";

function About() {
  return (
 
 

        <section className="bio-wrapper">
        <div className="bio-text-container">
           
              <h3 className="bio-text title">About Me</h3>
          

               <p className="bio-text">

               <img className="bio-picture" src={selfImage} style={{ width: "10%" }} alt="Me" /> 

                 I'm a busy mom of two girls who wants to grow and learn as I continue to get older. I currently work as an Operations Manager for a small company called CarProUSA. In this company, I have been involved in everything from website development to digital marketing to customer service to branding. I have found in all of these roles, I have enjoyed website development the most as it allows me to be creative while still having structure and also challenges me to solve complex problems. I look forward to expanding my knowledge as a developer.
                </p>
         
    
        
        </div>
    
    </section>

  );
}

export default About;
