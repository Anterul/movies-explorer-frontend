function convertToHours(duration) {
  const hour = Math.floor(duration / 60);
  let minute = duration % 60;
  minute = minute < 10 ? "0" + minute : minute;
  return hour + "ч " + minute + "м";
}

export default convertToHours;
