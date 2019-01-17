import React, { useEffect } from 'react';

const NotFound = ({ history }) => {
  useEffect(() => {
    setTimeout(() => history.push('/'), 2000);
  }, []);

  return <h1>NOT FOUND</h1>;
};

export default NotFound;
