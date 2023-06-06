import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#081324] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Evan Kim, nice to meet you :)</p>
          </div>
          <div>
            <p>
              It's a pleasure to have you here. Welcome to my portfolio website! My name is Evan Kim, and I'm a Junior
              Full Stack developer. I have recently completed my studies at SAIT and I'm now actively seeking new job
              opportunities in the local area. I have a strong passion for learning new technologies and applying them
              to create innovative solutions.
            </p>
            <p>
              I firmly believe in the power of cooperation and teamwork to achieve outstanding results. Throughout my
              academic and professional journey, I have developed valuable skills in collaboration, communication, and
              problem-solving. I am excited to utilize these skills to make a positive impact in the industry and
              contribute value to any team I join.
            </p>
            <p>
              Thank you for taking the time to explore my portfolio. Please feel free to navigate through it and don't
              hesitate to reach out if you have any questions or potential collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
