import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-start mt-28 items-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
      <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Mab Sothea
            </h1>
            <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
          Full Stack Developer
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I'm a creative and dedicated Full Stack Developer based in ..., 
          specializing in both front-end and back-end development. Passionate 
          about building efficient, user-friendly web applications and delivering 
          exceptional results.
        </p>
        
        <div className="flex justify-center space-x-4 pt-4">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a 
            href="/portfolio" 
            className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;