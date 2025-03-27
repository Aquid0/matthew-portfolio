import React from 'react';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';

const AboutPanel = ({ children }) => {
  return (
    <Tilt
      className="about-panel"
      perspective={1000}
      tiltReverse={true}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={1500}
      scale={1.02}
      gyroscope={true}
    >
      {children}
    </Tilt>
  );
};

AboutPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutPanel;
