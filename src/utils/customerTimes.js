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
  pickup: [12, 13, 14, 15, 16, 17, 18, 19],
  return: [7, 16, 17, 18, 19, 20, 21],
};

// Last pickup time
const lastPickup = times.pickup[times.pickup.length - 1];

// From the rounded current hour to first allowed pickup time
// From the selected pickup hour to first allowed return time
export const pickupDelta = 1;
const returnDelta = 4;

// When the minutes round to the next hour
export const roundingCutoff = 30;

// current rounded hour
const roundedHour =
  getNow().minute < roundingCutoff ? getNow().hour : getNow().hour + 1;

/* PICKUP DATE (returns DateTime objects) */

export const pickupDate = () => {
  if (roundedHour <= lastPickup - pickupDelta)
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

  // If pickup is tomorrow show all hours
  if (!pickupIsToday)
    return times.pickup.map(hour => getZeroTomorrow.set({ hour }));

  // If pickup is today filter hours by current rounded hour
  const filteredTimes = times.pickup.filter(
    time => time >= roundedHour + pickupDelta,
  );
  return filteredTimes.map(hour => getZeroToday.set({ hour }));
};

/* RETURN DATE (returns DateTime objects) */

export const returnDate = pickupHourUnixString => {
  if (!pickupHourUnixString) return null;

  const selectedPickupHour = getTime(pickupHourUnixString);

  if (selectedPickupHour.hour > 17) {
    return { val2: getZeroFollowing(selectedPickupHour) };
  }

  return {
    val1: getZero(selectedPickupHour),
    val2: getZeroFollowing(selectedPickupHour),
  };
};

/* RETURN TIMES */

export const returnTimes = (
  selectedReturnDateUnixString,
  selectedPickupTimeUnixString,
) => {
  if (!selectedReturnDateUnixString || !selectedPickupTimeUnixString) return [];

  const selectedReturnDate = getTime(selectedReturnDateUnixString);
  const selectedPickupTime = getTime(selectedPickupTimeUnixString);

  const returnIsSameDay = selectedPickupTime.day === selectedReturnDate.day;

  // If return is next day show all
  if (!returnIsSameDay)
    return times.return.map(hour =>
      getZeroFollowing(selectedPickupTime).set({ hour }),
    );

  // If return is same day filter
  const filteredTimes = times.return.filter(
    time => time >= selectedPickupTime.hour + returnDelta,
  );
  return filteredTimes.map(hour => getZero(selectedReturnDate).set({ hour }));
};
