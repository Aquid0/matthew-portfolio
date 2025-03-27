import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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

FadeInText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default FadeInText;
