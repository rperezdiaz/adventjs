function calculateTime(deliveries) {
  let arr = deliveries.map((item) => {
    return item.split(":");
  });

  let time = {
    hours: 0,
    mins: 0,
    secs: 0,
  };

  arr.forEach((timestamp) => {
    time.hours += +timestamp[0];
    time.mins += +timestamp[1];
    time.secs += +timestamp[2];
  });

  return [time.hours, time.mins, time.secs];
}
