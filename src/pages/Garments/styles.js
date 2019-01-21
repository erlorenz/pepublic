import styled from 'styled-components/macro';
import { darken } from 'polished';

export const GarmentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  cursor: pointer;

  :last-child {
    padding-bottom: 0;
  }

  :hover {
    background-color: ${darken(0.05, '#FFF')};
  }
`;

export const GarmentHeader = styled.div`
  font-weight: 600;
  display: flex;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.2rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  justify-content: space-between;
`;