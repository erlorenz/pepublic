import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components/macro';

import GET_GARMENTS from '../../queries/getGarments';
import Loading from '../../components/Loading';
import GarmentList from './GarmentList';
import GarmentChoice from './GarmentChoice';

const Garments = () => {
  return (
    <Query query={GET_GARMENTS}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <p>error</p>;
        return (
          <>
            <h1>Garments Page</h1>
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

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
