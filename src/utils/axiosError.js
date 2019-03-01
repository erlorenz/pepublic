function axiosError(e, errorName) {
  if (e.response) {
    console.log(`[${errorName}]`, e.response.data);

    return {
      success: false,
      message: 'Error in the response: see console.',
    };
  } else if (e.request) {
    console.log(`[${errorName}]`, e.request);

    return {
      success: false,
      message: 'Error reaching server: see console.',
    };
  } else {
    console.log(`[${errorName}]`, e);
    return {
      success: false,
      message: 'Error: see console.',
    };
  }
}

export default axiosError;
