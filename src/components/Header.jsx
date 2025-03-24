import React, { useState, useEffect } from 'react';

const Header = () => {
  const subtitles = [
    <p>Aspiring Software Engineer.</p>,
    <p>Undergraduate at the University of Bath.</p>,
    <p>
      Currently working on: <strong>Portfolio Website.</strong>
    </p>,
  ];

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % subtitles.length);
        setIsVisible(true); // Start fade in
      }, 600); // Wait for fade out to complete
    }, 5000);

    return () => clearInterval(interval);
  }, [subtitles]);

  return (
    <div className="grid grid-cols-10 grid-rows-1 items-stretch">
      <h1 className="col-start-2 col-span-4 text-9xl font-light border-r border-b p-5">
        Matthew La.
      </h1>
      <div className="col-start-6 col-span-4 border-b p-5 flex flex-col gap-4 justify-center">
        <p className="text-5xl font-light">Front End Engineer Intern.</p>
        <p
          className={`text-gray-500 text-2xl font-light transition-opacity duration-600 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {subtitles[current]}
        </p>
      </div>
    </div>
  );
};

export default Header;
