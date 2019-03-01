import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = ({ className, type = 'Puff', color = '#00BFFF' }) => (
  <div className={className}>
    <Loader type={type} color={color} height="100" width="100" />
  </div>
);

export default Loading;
