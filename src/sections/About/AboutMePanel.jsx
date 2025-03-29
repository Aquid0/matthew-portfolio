import React from 'react';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';

const AboutMePanel = () => {
  return (
    <Tilt
      className="bg-white-standard absolute z-50 h-25 w-125 border-2 border-black p-2"
      perspective={200}
      tiltReverse={true}
      trackOnWindow={true}
      gyroscope={true}
    >
      <h1 className=" ">My name is Matthew La</h1>
    </Tilt>
  );
};

AboutMePanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutMePanel;

// .about-panel {
//   position: absolute;
//   width: 220px;
//   height: 200px;
//   margin: 20;
//   background: #f5f5f5;
//   border: 2px solid black;
//   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
//   z-index: 100;
//   transition: opacity 0.3s ease;
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
