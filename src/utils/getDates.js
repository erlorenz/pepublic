import { DateTime } from 'luxon';

export const getNow = () => {
  try {
    const nowInPST = DateTime.fromObject({ zone: 'America/Los_Angeles' });

    return nowInPST;
  } catch (e) {
    console.log(e.message);
    return '---';
  }
};

export const getTime = date => {
  try {
    const dateInPST = DateTime.fromMillis(+date, {
      zone: 'America/Los_Angeles',
    });

    return dateInPST;
  } catch (e) {
    console.log(e.message);
    return '---';
  }
};

export const getZero = date => {
  return date.set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });
};

export const getZeroToday = getZero(getNow());

export const getZeroTomorrow = getZero(getNow().plus({ days: 1 }));

export const getZeroFollowing = date => getZero(date).plus({ days: 1 });
