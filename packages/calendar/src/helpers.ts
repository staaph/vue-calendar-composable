import dayjs, { type Dayjs } from "dayjs";

/**
 * helper to start week on sunday (only if provided by options)
 * @param day
 * @param weekStart
 */
export const startOfWeek = (day: Dayjs, weekStart: number): Dayjs => {
  const diff = day.day() < weekStart ? 7 : 0;
  return dayjs(day).subtract(day.day() - diff - weekStart, "day");
};
