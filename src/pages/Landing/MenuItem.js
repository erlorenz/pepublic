import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';

function MenuItem({ icon, schedule, children }) {
  if (schedule) {
    return (
      <Li>
        <StyledLink to="/order/schedule">
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>
          {children}
        </StyledLink>
      </Li>
    );
  }
  return (
    <Li>
      <StyledLink to="">
        <Icon>
          <FontAwesomeIcon icon={icon} />
        </Icon>
        {children}
      </StyledLink>
    </Li>
  );
}

export default MenuItem;

const Li = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffffd1;
`;

const Icon = styled.span`
  margin-right: 1rem;
  color: #808080a8;
`;

const StyledLink = styled(Link)`
  padding: 0.6rem 0;
  padding-left: 0.5rem;
  width: 100%;
`;

const StyledScrollLink = styled(Link)`
  padding: 0.6rem 0;
`;
