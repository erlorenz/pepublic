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

const Success = ({ location }) => {
  const {
    twilio,
    receiptEmail,
    errorEmail,
    database,
  } = location.state.data.checkout;

  let error = false;
  if (!twilio.success || !receiptEmail.success || !database.success)
    error = true;

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

  return (
    <>
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
        {!error && (
          <>
            <Instructions>
              We have received your order and are working on it now.
            </Instructions>
            <Instructions>
              Be on the lookout for a receipt email with further instructions.
              You will receive updates via text.
            </Instructions>
            <Instructions>
              If you have any questions about your order please call us at
              702-620-3315 or email us at support@pressexpresslv.com.
            </Instructions>
          </>
        )}
        {!database.success && !errorEmail.success && (
          <>
            <Instructions>
              Your order did not go through correctly but your card may have
              been charged. Please call us at 702-620-3315 or email
              support@pressexpresslv.com as soon as possible.
            </Instructions>
          </>
        )}
        {!database.success && errorEmail.success && (
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
        )}
        {!twilio.success && receiptEmail.success && database.success && (
          <>
            <Instructions>
              We received your order but there may be an issue with sending text
              updates. Rest assured we are looking at it now and if necessary
              will contact you via email or phone.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )}

        {database.success && twilio.success && !receiptEmail.success && (
          <>
            <Instructions>
              We received your order but there may be an issue sending the email
              receipt. Rest assured we are looking at it now and if necessary
              will contact you via email or phone.
            </Instructions>
            <Instructions>
              You can also reach out to us at 702-620-3315 or
              support@pressexpresslv.com.
            </Instructions>
          </>
        )}
        {database.success && !twilio.success && !receiptEmail.success && (
          <>
            <Instructions>
              We received your order but there was an issue sending the email
              receipt and with text updates. Rest assured we are looking at it
              now and if necessary will contact you.
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
