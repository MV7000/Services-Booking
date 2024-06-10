import React from 'react';
//@ts-ignore
import ReactVivus from 'react-vivus';

import svg from './hi_animated.svg';

const VivusSvgComponent = () => {
  return (
    <>
      <ReactVivus
        id='fool'
        option={{
          file: svg.src,
          type: 'oneByOne',
          animTimingFunction: 'EASE',
          duration: 250,
        }}
        style={{ height: '300px', width: '250px' }}
      />
    </>
  );
};
export default VivusSvgComponent;
