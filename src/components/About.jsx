import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#081324] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'am Evan Kim, nice to see you : Please take a round</p>
                    </div>
                    <div>
                        <p>It's pleasure to see you. Welcome to my Portfolio website! THIS IS THE TEST</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
