import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="relative grid h-12 grid-cols-10 gap-0 border-black font-mono uppercase italic">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-black"
      />
      <div className="relative flex items-center justify-center border-black">
        {time.toLocaleTimeString()} GMT
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-0 right-0 h-screen w-px bg-black"
        />
      </div>
      <div className="col-span-2 ml-12 flex items-center justify-start gap-10 border-black">
        <a href="#" className="animated-underline relative no-underline">
          Index
        </a>
        <div className="h-4 w-px bg-black"></div>
        <p className="text-gray-500">(Current Page)</p>
      </div>

      <div className="col-span-4 col-start-6 mr-12 flex items-center justify-end gap-45">
        <a href="#" className="animated-underline relative no-underline">
          .01 About
        </a>
        <a href="#" className="animated-underline relative no-underline">
          .02 Experience
        </a>
        <a href="#" className="animated-underline relative no-underline">
          .03 Projects
        </a>
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="absolute top-0 left-0 h-screen w-px bg-black"
        />
        Based in UK
      </div>
    </div>
  );
};

export default NavBar;
