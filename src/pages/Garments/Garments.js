import React from 'react';
import styled from 'styled-components/macro';
import Bottombar from '../../components/Bottombar';
// import MessageBox from '../../components/MessageBox';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import GarmentChoice from './GarmentChoice';
// import GET_GARMENTS from '../../queries/getGarments';
// import Loading from '../../components/Loading';
import GarmentList from './GarmentList';
import { Helmet } from 'react-helmet';

const Garments = props => {
  return (
    <>
      <Helmet>
        <title>Select Your Garments</title>
      </Helmet>
      <PageTitle>What are we doing for you?</PageTitle>
      <PageInstructions>
        Each click on an item increases the quantity added to your cart. To
        remove items, click on them in the cart.
      </PageInstructions>
      <Row>
        {/* <Query query={GET_GARMENTS}>
          {({ loading, error, data }) => {
            if (loading) return <StyledLoading />;
            if (error)
              return (
                <Box>We're experiencing issues with the server right now.</Box>
              );
            return <GarmentList data={data} />;
          }}
        </Query> */}
        <GarmentList />
        <GarmentChoice />
      </Row>
      <Spacer />
      <Bottombar garments {...props} />
    </>
  );
};

export default Garments;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Spacer = styled.div`
  height: 5rem;
  width: 100%;
  @media (min-width: 1000px) {
    height: 6rem;
  }
`;
