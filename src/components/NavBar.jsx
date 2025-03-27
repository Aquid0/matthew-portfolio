import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="grid grid-cols-10 gap-0 h-12 border-black uppercase italic font-mono relative">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-black"
      />
      <div className="relative flex items-center justify-center border-black">
        {time.toLocaleTimeString()} GMT
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute right-0 top-0 h-screen w-px bg-black"
        />
      </div>
      <div className="col-span-2 flex items-center border-black gap-10 ml-10">
        <a href="#" className="relative no-underline animated-underline">
          Index
        </a>
        <div className="w-px h-4 bg-black"></div>
        <p className="text-gray-500">(Current Page)</p>
      </div>

      <div className="col-start-6 col-span-4 flex items-center justify-center gap-45">
        <a href="#" className="relative no-underline animated-underline">
          .01 About
        </a>
        <a href="#" className="relative no-underline animated-underline">
          .02 Experience
        </a>
        <a href="#" className="relative no-underline animated-underline">
          .03 Projects
        </a>
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="absolute left-0 top-0 h-screen w-px bg-black"
        />
        Based in UK
      </div>
    </div>
  );
};

export default NavBar;
