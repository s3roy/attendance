/**
 * Determines if a given date is a Sunday.
 * @param date The date to check.
 * @returns true if the date is Sunday, otherwise false.
 */
const isSunday = (date: Date): boolean => {
  return date.getDay() === 0; // 0 represents Sunday in JavaScript Date.
};

/**
 * Generates attendance data for a list of students with random attendance marks.
 * @param days An array of Date objects for each day of a specific month.
 * @returns An array of objects each representing a student's attendance for the month.
 */
export const generateAttendanceData = (
  days: Date[]
): { name: string; attendance: string[] }[] => {
  const names = [
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Peter Griffin',
    'Lois Griffin',
    'Meg Griffin',
    'Chris Griffin',
    'Stewie Griffin',
    'Brian Griffin',
    'Glenn Quagmire',
  ];

  return names.map((name) => {
    const attendance = days.map((day) =>
      isSunday(day) ? '-' : Math.random() > 0.5 ? '1' : '0'
    );
    return { name, attendance };
  });
};
