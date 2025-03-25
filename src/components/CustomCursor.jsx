import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const springConfig = { type: 'spring', stiffness: 500, damping: 50 };
  const baseCircleSize = 15;
  const hoverScale = 2.5;
  const circleSize = isHoveringLink
    ? baseCircleSize * hoverScale
    : baseCircleSize;
  const circleRadius = circleSize / 2;

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.closest('.cursor-hover')) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.closest('.cursor-hover')) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Crosshair - Left side */}
      <motion.div
        className="fixed h-px bg-black"
        animate={{
          top: position.y,
          left: 0,
          width: position.x - circleRadius,
        }}
        transition={springConfig}
      />
      {/* Crosshair - Right side */}
      <motion.div
        className="fixed h-px bg-black"
        animate={{
          top: position.y,
          left: position.x + circleRadius,
          right: 0,
        }}
        transition={springConfig}
      />
      {/* Crosshair - Top side */}
      <motion.div
        className="fixed w-px bg-black"
        animate={{
          left: position.x,
          top: 0,
          height: position.y - circleRadius,
        }}
        transition={springConfig}
      />
      {/* Crosshair - Bottom side */}
      <motion.div
        className="fixed w-px bg-black"
        animate={{
          left: position.x,
          top: position.y + circleRadius,
          bottom: 0,
        }}
        transition={springConfig}
      />

      {/* Circle cursor */}
      <motion.div
        className={`fixed border-2 rounded-full mix-blend-difference`}
        animate={{
          x: position.x - baseCircleSize / 2,
          y: position.y - baseCircleSize / 2,
          scale: isHoveringLink ? hoverScale : 1,
        }}
        style={{
          width: baseCircleSize,
          height: baseCircleSize,
          transform: 'translate(-50%, -50%)',
        }}
        transition={springConfig}
      />
    </div>
  );
}
