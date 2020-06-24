import React from 'react';
import PropTypes from "prop-types"
import { Box } from 'rebass';

const Icon = ({ className,  height, type, width}) => {
  return (
    <Box className={className ? className : ''} width={width} height={height}>
      {type === 'launch' &&
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,28H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h9V6H6V26H26V17h2v9A2,2,0,0,1,26,28Z"></path><path d="M21 2L21 4 26.59 4 18 12.59 19.41 14 28 5.41 28 11 30 11 30 2 21 2z"></path><title>Launch</title></svg>
      }
      {type === 'arrow' &&
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path><title>Arrow right</title></svg>
      }
    </Box>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

export default Icon;
