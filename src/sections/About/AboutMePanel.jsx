import React from 'react';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';

const AboutMePanel = ({ children }) => {
  return (
    <Tilt
      className="about-panel"
      perspective={200}
      tiltReverse={true}
      trackOnWindow={true}
      gyroscope={true}
    >
      {children}
    </Tilt>
  );
};

AboutMePanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutMePanel;
