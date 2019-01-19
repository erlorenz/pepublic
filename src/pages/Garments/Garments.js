import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import GET_GARMENTS from '../../queries/getGarments';
import Loading from '../../components/Loading';

const Garments = () => {
  return (
    <div>
      <div>GARMENTS PAGE</div>
      <Query query={GET_GARMENTS}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <p>error</p>;
          console.log('Data: ', data);
          return <p>data is here</p>;
        }}
      </Query>
    </div>
  );
};

export default Garments;
