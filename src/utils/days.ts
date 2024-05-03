/**
 * Generates an array of dates for each day of the specified month and year.
 * @param year The year for which to generate the days.
 * @param month The month for which to generate the days.
 * @returns An array of Date objects for each day of the specified month.
 */
export const getDaysInMonth = (year: number, month: number): Date[] => {
  let date = new Date(year, month - 1, 1);
  const days = [];

  while (date.getMonth() === month - 1) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};
