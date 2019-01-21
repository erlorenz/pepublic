import React from 'react';
import styled from 'styled-components/macro';

const MessageBox = ({ children, className }) => {
  return (
    <Div className={className}>
      <Message>{children}</Message>
    </Div>
  );
};

export default MessageBox;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  background-color: white;
  padding: 2rem;
`;
