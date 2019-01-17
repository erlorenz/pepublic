export default (component, e) => {
  // Extract error
  let errorMessage;
  if (e.response) {
    errorMessage = e.response.data.error;
  } else if (e.request) {
    errorMessage = 'No response from server.';
  } else errorMessage = 'Could not send request';
  console.log(errorMessage);

  // Show Error Message for 5 Seconds
  component.setState({ errorMessage });
  setTimeout(() => {
    component.setState({ errorMessage });
  }, 5000);
};
