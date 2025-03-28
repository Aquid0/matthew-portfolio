import React, { useEffect, useState } from 'react';
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

  // Apply event listeners on mount
  useEffect(() => {
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      // Remove event listeners when component unmounts
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Crosshair - Left side */}
      <motion.div
        className="fixed h-px bg-black"
        animate={{
          top: position.y, // Start at same y as cursor
          left: 0, // Start from left edge of screen
          width: position.x - circleRadius, // Adjust width based on cursor position
        }}
        transition={springConfig}
      />
      {/* Crosshair - Right side */}
      <motion.div
        className="fixed h-px bg-black"
        animate={{
          top: position.y, // Start at same y as cursor
          left: position.x + circleRadius, // Start from right edge of cursor
          right: 0, // End at right edge of screen
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
        className={`fixed rounded-full border-2 mix-blend-difference`}
        animate={{
          x: position.x - baseCircleSize / 2,
          y: position.y - baseCircleSize / 2,
          scale: isHoveringLink ? hoverScale : 1,
        }}
        style={{
          width: baseCircleSize,
          height: baseCircleSize,
        }}
        transition={springConfig}
      />
    </div>
  );
}
