import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="grid grid-cols-10 gap-0 h-10 border-b border-black uppercase text-sm italic">
      <div className="relative flex items-center justify-center border-black ">
        {time.toLocaleTimeString()} GMT
        <div className="absolute right-0 top-0 h-screen w-px bg-black" />
      </div>
      <div className="col-span-2 flex items-center border-black  gap-10 ml-10">
        <a href="#" className="hover:underline">
          Index
        </a>
        <div className="w-px h-4 bg-black"></div>
        (Current Page)
      </div>

      <div className=" col-start-6 col-span-4 flex items-center justify-center gap-45">
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

      <div className="relative flex items-center justify-center ">
        <div className="absolute left-0 top-0 h-screen w-px bg-black" />
        Based in UK
      </div>
    </div>
  );
};

export default NavBar;
