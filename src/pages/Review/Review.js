import React, { useContext } from 'react';
import { GarmentsContext } from '../../contexts/Garments';
import { ScheduleContext } from '../../contexts/Schedule';

const Review = () => {
  const schedule = useContext(ScheduleContext);
  const garments = useContext(GarmentsContext);

  return (
    <>
      <div>REVIEW PAGE</div>
      <div>Review page</div>
    </>
  );
};

export default Review;
