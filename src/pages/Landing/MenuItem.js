import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';
import { Link as ScrollLink } from 'react-scroll';

function MenuItem({ icon, schedule, children, to, handleClick }) {
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
      <StyledScrollLink
        onClick={handleClick}
        to={to}
        spy={true}
        smooth={true}
        duration={300}
        offset={-70}>
        <Icon>
          <FontAwesomeIcon icon={icon} />
        </Icon>
        {children}
      </StyledScrollLink>
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

const StyledScrollLink = styled(ScrollLink)`
  padding: 0.6rem 0;
  padding-left: 0.5rem;
  width: 100%;
`;
