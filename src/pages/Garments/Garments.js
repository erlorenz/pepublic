import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components/macro';

import GET_GARMENTS from '../../queries/getGarments';
import Loading from '../../components/Loading';
import GarmentList from './GarmentList';
import GarmentChoice from './GarmentChoice';
import { PageTitle, PageInstructions } from '../../components/UI';
import MessageBox from '../../components/MessageBox';

const Garments = () => {
  return (
    <Query query={GET_GARMENTS}>
      {({ loading, error, data }) => {
        if (loading) return <StyledLoading />;
        if (error)
          return (
            <Box>We're experiencing issues with the server right now.</Box>
          );
        return (
          <>
            <PageTitle>Garments Page</PageTitle>
            <PageInstructions>
              Here are the instructions. Click on an item to add 1 garment.
            </PageInstructions>
            <Row>
              <GarmentList data={data} />
              <GarmentChoice />
            </Row>
          </>
        );
      }}
    </Query>
  );
};

export default Garments;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledLoading = styled(Loading)`
  display: flex;
  justify-content: center;
  margin-top: 11rem;
`;

const Box = styled(MessageBox)`
  margin-top: 10rem;
`;
