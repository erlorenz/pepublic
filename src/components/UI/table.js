import styled from 'styled-components/macro';

export const TableRow = styled.tr`
  cursor: ${props => (props.hover ? 'pointer' : 'default')};
  border-bottom: ${props => (props.underline ? `1px solid lightgray` : 'none')};

  :nth-child(even) {
    background-color: ${props =>
      props.striped ? props.theme.backgroundColor : 'transparent'};
  }
  :hover {
    background-color: ${props =>
      props.hover ? props.theme.tableHover : undefined};
  }
`;

export const TableCell = styled.td`
  padding: 0.8rem;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: ${props => (props.preLine ? 'pre-line' : 'nowrap')};
  text-align: ${props => (props.right ? 'right' : 'left')};
`;

export const TableHead = styled.thead`
  background-color: #a4c1c6;
  color: white;
`;
