import { Dayjs } from "dayjs";
import { MaybeRef } from "vue";
import { LocaleKey } from "./CalendarTypes";

export interface CalendarConfig {
  date?: Date | Dayjs;
  week?: MaybeRef<number>;
  month?: MaybeRef<number>;
  year?: MaybeRef<number>;
  type?: MaybeRef<"week" | "month">;
  adaptUserLanguage?: MaybeRef<boolean>;
  userLanguage?: MaybeRef<LocaleKey>;
  startOnSunday?: MaybeRef<boolean>;
  onlyShowWeek?: MaybeRef<boolean>;
}