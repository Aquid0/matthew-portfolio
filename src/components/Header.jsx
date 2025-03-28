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
    <div className="relative grid grid-cols-10 grid-rows-1 items-stretch">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="absolute bottom-0 left-0 col-span-8 col-start-2 h-[1px] w-full bg-black"
      />
      <div className="relative col-span-4 col-start-2 p-5 font-light">
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
          className="absolute top-0 right-0 h-full w-[1px] bg-black"
        />
      </div>
      <div className="col-span-4 col-start-6 flex flex-col justify-center gap-5 overflow-visible p-5">
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
          className="text-2xl font-light text-gray-500"
        >
          {subtitles[current]}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
