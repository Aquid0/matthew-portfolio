import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="grid grid-cols-10 gap-0 h-13 border-b border-black uppercase">
      <div className="relative flex items-center justify-center border-black italic">
        {time.toLocaleTimeString()} GMT
        <div className="absolute right-0 top-0 h-screen w-px bg-black" />
      </div>
      <div className="col-span-2 flex items-center border-black italic gap-10 ml-10">
        <a href="#" className="hover:underline">
          Index
        </a>
        <div className="w-px h-7 bg-black"></div>
        (Current Page)
      </div>

      <div className="italic col-start-6 col-span-4 flex items-center justify-center gap-45">
        <a href="#" className="hover:underline">
          .01 About
        </a>
        <a href="#" className="hover:underline">
          .02 Experience
        </a>
        <a href="#" className="hover:underline">
          .03 Projects
        </a>
      </div>

      <div className="relative flex items-center justify-center italic">
        <div className="absolute left-0 top-0 h-screen w-px bg-black" />
        Based in UK
      </div>
    </div>
  );
};

export default NavBar;
