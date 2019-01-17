import dayjs from 'dayjs';

const formatDate = timestamp => {
  if (!timestamp) return '---';
  try {
    const pacificTime = new Date(+timestamp).toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });

    return dayjs(pacificTime).format('ddd M/D h:mm A');
  } catch (e) {
    console.log(e.message);
    return '---';
  }
};

export default formatDate;
