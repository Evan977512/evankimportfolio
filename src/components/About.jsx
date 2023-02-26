import React from 'react';

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
                        <p>Hi, I'am Evan Kim, nice to see you : Please take a round</p>
                    </div>
                    <div>
                        <p>
                            It's a pleasure to see you. Welcome to my Portfolio website! My name is Evan Kim and I'm a Junior Full Stack developer. I
                            have a passion for learning new technologies and applying them to create innovative solutions. Currently, I am a student
                            at SAIT and I'm eager to find a new job in the local city.
                        </p>
                        <p>
                            I strongly believe in the power of cooperation and teamwork to achieve great results. Throughout my academic and
                            professional experience, I have honed my skills in collaboration, communication, and problem-solving. I am excited to use
                            my skills to make a positive impact in the industry and bring value to any team I work with.
                        </p>
                        <p>
                            Thank you for taking the time to visit my portfolio. Please feel free to explore and reach out if you have any questions
                            or opportunities to collaborate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
