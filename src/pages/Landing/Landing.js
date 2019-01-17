import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      LANDING PAGE
      <Link to="/order/schedule">Schedule Now</Link>
    </div>
  );
};

export default Landing;
