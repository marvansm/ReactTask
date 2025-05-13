import React from "react";
const ErrorPage = () => {
  return (
    <div>
    
      <div className="flex flex-col items-center justify-center h-screen px-4 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-8">
       
          We're working hard to bring you an amazing new website. Stay tuned!
        </p>
        <div className="flex space-x-4">
          <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
            Go Home Page
          </a>
          <a
            href="#"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
