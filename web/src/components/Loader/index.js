import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => (
  <Loader
    type="BallTriangle"
    color="#7D40E7"
    height={50}
    width={50}
    style={{ marginTop: 150}}
    timeout={1500} //3 secs
  />
);

export default LoaderComponent;
