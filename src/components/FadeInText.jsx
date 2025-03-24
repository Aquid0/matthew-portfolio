import React from 'react';
import { motion } from 'framer-motion';

const FadeInText = ({
  text,
  fontSize = 'text-xl',
  color = 'text-black',
  fontWeight = 'font-light',
  duration = 1.25,
  delay = 0,
}) => {
  return (
    <motion.div
      style={{ overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.1' }}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: duration, ease: 'easeInOut', delay: delay }}
      className={`${fontSize} ${color} ${fontWeight}`}
    >
      {text}
    </motion.div>
  );
};

export default FadeInText;
