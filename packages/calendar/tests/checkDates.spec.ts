import { describe, expect, it } from "vitest";
import { useCalendar } from "../src/useCalendar";
import dayjs from "dayjs";

describe('checks if the dates are correct', () => {
  const { dates, format } = useCalendar({ date: new Date("2023-07-23") });
  const firstDay = dates.value[0];
  const lastDay = dates.value[dates.value.length - 1];
  const today = dates.value.find(date => format(date.date, "YYYY-MM-DD") === format(dayjs("2023-07-23"), "YYYY-MM-DD"));

  it('checks if currentDay is found', () => {
    expect(today.isCurrent).toBeTruthy();
  });

  it("checks if firstDay is in 6 weeks range and is not in current month", () => {
    expect(format(firstDay.date, "YYYY-MM-DD")).toEqual("2023-06-26");
    expect(firstDay.isCurrent).toBeFalsy();
  });

  it("checks if lastDay is in 6 weeks range and is not in current month", () => {
    expect(format(lastDay.date, "YYYY-MM-DD")).toEqual("2023-08-06");
    expect(lastDay.isCurrent).toBeFalsy();
  });

  it("checks if firstDay is Monday", () => {
    expect(format(firstDay.date, "d")).toEqual("1");
  });
});