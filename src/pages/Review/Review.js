import React, { useContext } from 'react';
import Bottombar from '../../components/Bottombar';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import { GarmentsContext } from '../../contexts/Garments';
import { ScheduleContext } from '../../contexts/Schedule';

const Review = props => {
  const schedule = useContext(ScheduleContext);
  const garments = useContext(GarmentsContext);

  return (
    <>
      <PageTitle>Does everything look good?</PageTitle>
      <PageInstructions>
        Review the selected times and garments - you can always go back. Also
        choose any available options and/or provide special instructions.
      </PageInstructions>
      <div>REVIEW PAGE</div>
      <div>Review page</div>
      <Bottombar review {...props} />
    </>
  );
};

export default Review;
