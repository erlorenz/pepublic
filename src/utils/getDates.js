import dayjs from 'dayjs';

export const getNow = () => {
  try {
    const pacificTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });

    console.log(dayjs(pacificTime));
    return dayjs(pacificTime);
  } catch (e) {
    console.log(e.message);
    return '---';
  }
};

export const getTime = date => {
  try {
    const pacificTime = new Date(+date).toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });

    return dayjs(pacificTime);
  } catch (e) {
    console.log(e.message);
    return '---';
  }
};

export const getZero = date => {
  return date
    .set('hour', 0)
    .set('minute', 0)
    .set('second', 0)
    .set('millisecond', 0);
};

export const getZeroToday = getZero(getNow());

export const getZeroTomorrow = getZero(getNow().add(1, 'day'));

export const getZeroFollowing = date => getZero(getTime(date)).add(1, 'day');
