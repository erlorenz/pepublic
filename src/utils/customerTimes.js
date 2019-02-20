import {
  getNow,
  getTime,
  getZero,
  getZeroFollowing,
  getZeroToday,
  getZeroTomorrow,
} from './getDates';

const times = {
  pickup: [14, 16, 18, 20],
  return: [7, 16, 18, 20],
};
const pickupDelta = 2;
const returnDelta = 4;

/* PICKUP DATE (returns DateTime objects) */

export const pickupDate = () => {
  const now = getNow();
  if (now.hour < 19)
    return {
      val1: getZeroToday,
      val2: getZeroTomorrow,
    };
  return { val2: getZeroTomorrow };
};

/* PICKUP TIMES (returns DateTime objects) */

export const pickupTimes = selectedPickupDateUnixString => {
  if (!selectedPickupDateUnixString) return [];

  const selectedPickupDate = getTime(selectedPickupDateUnixString);

  const pickupIsToday = getNow().date === selectedPickupDate.date;

  console.log('Pickup is today?', pickupIsToday);

  if (!pickupIsToday)
    return times.pickup.map(hour => getZeroTomorrow.set({ hour }));

  const filteredTimes = times.pickup.filter(
    time => time >= getNow().hour + pickupDelta,
  );
  return filteredTimes.map(hour => getZeroToday.set({ hour }));
};

/* RETURN DATE */

export const returnDate = pickupHourUnix => {
  if (!pickupHourUnix) return null;

  const selectedPickupHour = getTime(pickupHourUnix);

  if (selectedPickupHour.hour() > 16) {
    return { val2: getZeroFollowing(selectedPickupHour) };
  }

  return {
    val1: getZero(selectedPickupHour),
    val2: getZeroFollowing(selectedPickupHour),
  };
};

/* RETURN TIMES */

export const returnTimes = (selectedReturnDateUnix, selectedPickupTimeUnix) => {
  if (!selectedReturnDateUnix) return [];

  const selectedReturnDate = getTime(selectedReturnDateUnix);
  const selectedPickupTime = getTime(selectedPickupTimeUnix);

  const returnIsSameDay =
    selectedPickupTime.date() === selectedReturnDate.date();

  if (!returnIsSameDay)
    return times.return.map(hour =>
      getZeroFollowing(selectedPickupTime)
        .set('hour', hour)
        .valueOf(),
    );

  const filteredTimes = times.return.filter(
    time => time >= selectedPickupTime.hour() + returnDelta,
  );
  return filteredTimes.map(hour =>
    getZero(selectedReturnDate)
      .set('hour', hour)
      .valueOf(),
  );
};
