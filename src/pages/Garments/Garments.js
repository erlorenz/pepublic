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

const Garments = props => {
  return (
    <>
      <PageTitle>What are we doing for you?</PageTitle>
      <PageInstructions>
        Each click on an item adds 1 to your cart. To remove, click on the item
        in the cart to lower the quantity.
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

// const StyledLoading = styled(Loading)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 1rem;
//   padding: 1rem;
//   background: white;
//   min-height: 300px;
//   box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 95px -30px;

//   @media (min-width: 1000px) {
//     margin-right: 1.8rem;
//     padding: 1.8rem;
//   }
// `;

// const Box = styled(MessageBox)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 1rem;
//   padding: 1rem;
//   background: white;
//   box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 95px -30px;

//   @media (min-width: 1000px) {
//     margin-right: 1.8rem;
//     padding: 1.8rem;
//   }
// `;
