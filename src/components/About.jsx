import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Mental Health Advocate with a B.S in Global Health Studies with professional certificates in Front-End Development and Back-End Development
        actively working towards transitioning into the technology industry. My goal is to build a career in technology that can make a positive impact 
        on behavioral health. I'm currently seeking opportunities to enhance my skills and grow into a competent professional in the tech industry.
        </p>

        <br />

        <p className="text-xl">
        Looking to connect with other professionals in the tech industry to explore how I can contribute to your team. 
        Please don't hesitate to reach out to me if you have any opportunities available. 
        Let's discuss how we can work together to create a better future for behavioral health and optimize technology to 
        positively impact our communities!
        </p>
      </div>
    </div>
  );
};

export default About;
