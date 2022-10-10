const About = () => {
    return (
        <div className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi. I'm Sai, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am a Software Engineer with 3 years of experience in the analysis, design, and implementation of integration solutions
                            using the MuleSoft Anypoint Platform. I am passionate about building excellent software that improves the lives of those
                            around me. I am currently pursuing my Masters in Computer Science to enhance my skill-set
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
