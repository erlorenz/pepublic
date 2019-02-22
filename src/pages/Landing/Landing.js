import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Landing = () => {
  return (
    <div>
      LANDING PAGE
      <Link to="/order/schedule">Schedule Now</Link>
    </div>
  );
};

export default Landing;

const test = styled.div``;
