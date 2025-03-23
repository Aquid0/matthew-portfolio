import { useEffect, useState } from "react"; 

const HomePanel = () => {
    const subtitles = [
        <p>Aspiring Software Engineer</p>, 
        <p>Undergraduate at the University of Bath</p>,
        <p>Currently working on: <strong>Portfolio Website</strong></p>
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % subtitles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [subtitles]);

    return (
        <div className="w-150 h-200 flex px-10 flex-col justify-between">
            <div>
                {/* Name and Title */}
                <h1 className="text-7xl font-bold">Matthew La</h1>
                <p className="font-semibold italic">Front End Engineer Intern</p>

                {/* Fading Subtitles */}
                <div className="relative h-[60px] mt-1">
                    {subtitles.map((subtitle, index) => (
                        <div 
                            key={index} 
                            className={`absolute top-0 left-0 w-full text-gray-500 transition-opacity duration-1000 ${
                                index === current ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {subtitle}
                        </div>
                    ))}
                </div>
                
                {/* Navigation */}
                <div className="flex flex-col gap-3 mt-20 max-w-[600px] mx-auto">
                    <a href="#" className="text-2xl border py-1 italic hover:bg-gray-600 text-center">ABOUT</a>
                    <a href="#" className="text-2xl border py-1 italic hover:bg-gray-600 text-center">EXPERIENCE</a>
                    <a href="#" className="text-2xl border py-1 italic hover:bg-gray-600 text-center">PROJECTS</a>
                </div>

                {/* Socials */}

            </div>
        </div>
    )
}

export default HomePanel;