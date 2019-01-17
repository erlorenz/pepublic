const formatStatus = status => {
  const formatted = status
    .split('_')
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');

  return formatted;
};

export default formatStatus;
