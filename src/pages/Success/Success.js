import React from 'react';
import styled from 'styled-components/macro';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import {
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScheduleContext } from '../../contexts/Schedule';
import { GarmentsContext } from '../../contexts/Garments';
import { OptionsContext } from '../../contexts/Options';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Success = ({ location }) => {
  const { text, receipt, database, name, email, phone } = location.state;

  let error = false;
  if (!text || !receipt || !database) error = true;

  const { clearSchedule } = React.useContext(ScheduleContext);
  const { clearGarments } = React.useContext(GarmentsContext);
  const { clearOptions } = React.useContext(OptionsContext);

  React.useEffect(() => {
    localStorage.removeItem('garments');
    localStorage.removeItem('schedule');
    localStorage.removeItem('options');
    clearSchedule();
    clearGarments();
    clearOptions();
  }, []);

  const sendErrorEmail = async () => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + '/checkout/error', {
        text,
        receipt,
        database,
        name,
        email,
        phone,
      });
      console.log('Sent error email off successfully');
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (error) {
      sendErrorEmail();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Making Order...</title>
      </Helmet>
      <IconContainer>
        {error ? (
          <Icon warning="true" icon={faExclamationTriangle} />
        ) : (
          <Icon icon={faCheck} />
        )}
      </IconContainer>
      {error ? (
        <SuccessOrWarning>Warning: Read Below...</SuccessOrWarning>
      ) : (
        <SuccessOrWarning>Success!</SuccessOrWarning>
      )}
      <Container>
        {database && receipt && text && (
          <>
            <Instructions>
              We have received your order and are working on it now. Unless we
              contact you with different instructions, make sure to have your
              garments ready at the bell desk by the scheduled pickup time.
            </Instructions>
            <Instructions>
              Be on the lookout for a receipt email and we'll keep you updated
              via text.
            </Instructions>
            <Instructions>
              If you are given a ticket when you leave your garments please send
              a picture via email to support@pressexpresslv.com if possible, or
              let us know.
            </Instructions>
            <Instructions>
              If you have any other questions about your order please call us at
              702-620-3315 or email us at support@pressexpresslv.com.
            </Instructions>
          </>
        )}
        {!database && receipt && (
          <>
            <Instructions>
              We received your order but something is wrong with our text
              updates. Rest assured we are looking at it now and if necessary
              will contact you via email or phone.
            </Instructions>
            <Instructions>
              Unless we contact you with different instructions, make sure to
              have your garments ready at the bell desk by the scheduled pickup
              time.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )}
        {!database && !receipt && (
          <>
            <Instructions>
              Your order did not go through correctly but your card may have
              been charged. Please call us at 702-620-3315 or email
              support@pressexpresslv.com as soon as possible.
            </Instructions>
          </>
        )}
        {/* {!database.success && errorEmail.success && (
          <>
            <Instructions>
              We received your order but you may not receive text updates or an
              email receipt. Rest assured we are looking at it now and if
              necessary will contact you.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )} */}
        {database && !text && receipt && (
          <>
            <Instructions>
              We received your order but something is wrong with our text
              updates. Rest assured we are looking at it now and if necessary
              will contact you via email or phone.
            </Instructions>
            <Instructions>
              Unless we contact you with different instructions, make sure to
              have your garments ready at the bell desk by the scheduled pickup
              time.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )}

        {database && text && !receipt && (
          <>
            <Instructions>
              We received your order but something is wrong with our email
              receipts. Rest assured we are looking at it now and if necessary
              will contact you via email or phone.
            </Instructions>
            <Instructions>
              Unless we contact you with different instructions, make sure to
              have your garments ready at the bell desk by the scheduled pickup
              time.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )}
        {database && !text && !receipt && (
          <>
            <Instructions>
              We received your order but something went wrong with our text
              updates and receipt email. Rest assured we are looking at it now
              and if necessary will contact you.
            </Instructions>
            <Instructions>
              Unless we contact you with different instructions, make sure to
              have your garments ready at the bell desk by the scheduled pickup
              time.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )}
      </Container>
    </>
  );
};

export default Success;

const Instructions = styled(PageInstructions)`
  margin-bottom: 0.5rem;
`;

const SuccessOrWarning = styled(PageTitle)`
  margin-top: 0.5rem;
`;

const Container = styled.div``;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${props => (props.warning ? '#ff882d' : '#00ad68')};
`;
