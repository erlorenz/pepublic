const setErrorMessage = e => {
  let message = 'Something strange happened';
  if (e.errors) message = e.errors[0];
  if (e.networkError) message = e.networkError.message;
  if (e.graphQLErrors && e.graphQLErrors.length)
    message = e.graphQLErrors[0].message;

  return message;
};

export default setErrorMessage;
