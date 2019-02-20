import {
  getNow,
  getTime,
  getZero,
  getZeroFollowing,
  getZeroToday,
  getZeroTomorrow,
} from './getDates';

// Hours available for pickup and return
const times = {
  pickup: [14, 16, 18, 20],
  return: [7, 16, 18, 20],
};

// From the current hour 0 minutes to first allowed pickup time
// From the selected pickup hour to first allowed return time
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

/* PICKUP TIMES (returns array of DateTime objects) */

export const pickupTimes = selectedPickupDateUnixString => {
  if (!selectedPickupDateUnixString) return [];

  const selectedPickupDate = getTime(selectedPickupDateUnixString);

  const pickupIsToday = getNow().day === selectedPickupDate.day;

  if (!pickupIsToday)
    return times.pickup.map(hour => getZeroTomorrow.set({ hour }));

  const filteredTimes = times.pickup.filter(
    time => time >= getNow().hour + pickupDelta,
  );
  return filteredTimes.map(hour => getZeroToday.set({ hour }));
};

/* RETURN DATE (returns DateTime objects) */

export const returnDate = pickupHourUnixString => {
  if (!pickupHourUnixString) return null;

  const selectedPickupHour = getTime(pickupHourUnixString);

  if (selectedPickupHour.hour > 16) {
    // console.log(
    //   'Getting: ',
    //   selectedPickupHour,
    //   'Returning: ',
    //   getZeroFollowing(selectedPickupHour),
    // );
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

  const returnIsSameDay = selectedPickupTime.day === selectedReturnDate.day;

  if (!returnIsSameDay)
    return times.return.map(hour =>
      getZeroFollowing(selectedPickupTime).set({ hour }),
    );

  const filteredTimes = times.return.filter(
    time => time >= selectedPickupTime.hour + returnDelta,
  );
  return filteredTimes.map(hour => getZero(selectedReturnDate).set({ hour }));
};
