import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FadeInText from './FadeInText';

const Header = () => {
  const subtitles = [
    'Aspiring Software Engineer.',
    'Undergraduate at the University of Bath.',
    'Currently working on: Portfolio Website.',
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const initialDelay = isFirstRender.current ? 2500 : 0;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % subtitles.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 750);
      }, 1000);
    }, 7500);

    if (isFirstRender.current) {
      setTimeout(() => {
        isFirstRender.current = false;
      }, initialDelay);
    }

    return () => clearInterval(interval);
  }, [subtitles]);

  return (
    <div className="grid grid-cols-10 grid-rows-1 items-stretch relative">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-black col-start-2 col-span-8"
      />
      <div className="col-start-2 col-span-4 p-5 relative font-light">
        <FadeInText
          text="Matthew La."
          fontSize="text-9xl"
          color="text-black"
          duration={1.5}
          delay={0.3}
        />
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="absolute right-0 top-0 h-full w-[1px] bg-black"
        />
      </div>
      <div className="col-start-6 col-span-4 p-5 flex flex-col gap-5 justify-center overflow-visible">
        <FadeInText
          text="Front End Engineer Intern."
          fontSize="text-5xl"
          color="text-black"
          duration={1.5}
          delay={1.5}
        />
        <motion.div
          key={current}
          initial={{ width: 0 }}
          animate={{ width: isAnimating ? 0 : '100%' }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: isFirstRender.current ? 1.5 : 0,
          }}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
          className="text-gray-500 text-2xl font-light"
        >
          {subtitles[current]}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
