import React from 'react';
import jwt_authentication from '../assets/autentication_login.png';
import coming_soon from '../assets/coming_soon.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: jwt_authentication,
      title: "Mental Health JWT Authentication",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: coming_soon,
      title: "Frontend: Stress Managment Tool!",
      style: "shadow-orange-500",
    },

    {
      id: 3,
      src: coming_soon,
      title: "Coming Soon!",
      style: "shadow-orange-500",
    },
    // Add other project objects here if needed
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio Projects
          </p>
          <p className="py-6">These are the projects I've worked on. To look at the code, head over to my GitHub!</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


