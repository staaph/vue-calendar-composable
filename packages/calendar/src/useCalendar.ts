import { computed, reactive, unref, ref } from "vue";
import dayjs, { type Dayjs } from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isoWeek from "dayjs/plugin/isoWeek";
import { LocaleKeyArr } from "../types/calendar/LocaleKey";
import type { Date, LocaleKey } from "../types/calendar/CalendarTypes";
import type { MaybeRef } from "../types/utils";

//locales
import "dayjs/locale/af";
import "dayjs/locale/am";
import "dayjs/locale/ar-dz";
import "dayjs/locale/ar-iq";
import "dayjs/locale/ar-kw";
import "dayjs/locale/ar-ly";
import "dayjs/locale/ar-ma";
import "dayjs/locale/ar-sa";
import "dayjs/locale/ar-tn";
import "dayjs/locale/ar";
import "dayjs/locale/az";
import "dayjs/locale/be";
import "dayjs/locale/bg";
import "dayjs/locale/bi";
import "dayjs/locale/bm";
import "dayjs/locale/bn-bd";
import "dayjs/locale/bn";
import "dayjs/locale/bo";
import "dayjs/locale/br";
import "dayjs/locale/bs";
import "dayjs/locale/ca";
import "dayjs/locale/cs";
import "dayjs/locale/cv";
import "dayjs/locale/cy";
import "dayjs/locale/da";
import "dayjs/locale/de-at";
import "dayjs/locale/de-ch";
import "dayjs/locale/de";
import "dayjs/locale/dv";
import "dayjs/locale/el";
import "dayjs/locale/en-au";
import "dayjs/locale/en-ca";
import "dayjs/locale/en-gb";
import "dayjs/locale/en-ie";
import "dayjs/locale/en-il";
import "dayjs/locale/en-in";
import "dayjs/locale/en-nz";
import "dayjs/locale/en-sg";
import "dayjs/locale/en-tt";
import "dayjs/locale/en";
import "dayjs/locale/eo";
import "dayjs/locale/es-do";
import "dayjs/locale/es";
import "dayjs/locale/et";
import "dayjs/locale/eu";
import "dayjs/locale/fa";
import "dayjs/locale/fi";
import "dayjs/locale/fo";
import "dayjs/locale/fr-ca";
import "dayjs/locale/fr-ch";
import "dayjs/locale/fr";
import "dayjs/locale/fy";
import "dayjs/locale/ga";
import "dayjs/locale/gd";
import "dayjs/locale/gl";
import "dayjs/locale/gom-latn";
import "dayjs/locale/gu";
import "dayjs/locale/he";
import "dayjs/locale/hi";
import "dayjs/locale/hr";
import "dayjs/locale/ht";
import "dayjs/locale/hu";
import "dayjs/locale/hy-am";
import "dayjs/locale/id";
import "dayjs/locale/is";
import "dayjs/locale/it-ch";
import "dayjs/locale/it";
import "dayjs/locale/ja";
import "dayjs/locale/jv";
import "dayjs/locale/ka";
import "dayjs/locale/kk";
import "dayjs/locale/km";
import "dayjs/locale/kn";
import "dayjs/locale/ko";
import "dayjs/locale/ku";
import "dayjs/locale/ky";
import "dayjs/locale/lb";
import "dayjs/locale/lo";
import "dayjs/locale/lt";
import "dayjs/locale/lv";
import "dayjs/locale/me";
import "dayjs/locale/mi";
import "dayjs/locale/mk";
import "dayjs/locale/ml";
import "dayjs/locale/mn";
import "dayjs/locale/mr";
import "dayjs/locale/ms-my";
import "dayjs/locale/ms";
import "dayjs/locale/mt";
import "dayjs/locale/my";
import "dayjs/locale/nb";
import "dayjs/locale/ne";
import "dayjs/locale/nl-be";
import "dayjs/locale/nl";
import "dayjs/locale/nn";
import "dayjs/locale/oc-lnc";
import "dayjs/locale/pa-in";
import "dayjs/locale/pl";
import "dayjs/locale/pt-br";
import "dayjs/locale/pt";
import "dayjs/locale/rn";
import "dayjs/locale/ro";
import "dayjs/locale/ru";
import "dayjs/locale/rw";
import "dayjs/locale/sd";
import "dayjs/locale/se";
import "dayjs/locale/si";
import "dayjs/locale/sk";
import "dayjs/locale/sl";
import "dayjs/locale/sq";
import "dayjs/locale/sr-cyrl";
import "dayjs/locale/sr";
import "dayjs/locale/ss";
import "dayjs/locale/sv-fi";
import "dayjs/locale/sv";
import "dayjs/locale/sw";
import "dayjs/locale/ta";
import "dayjs/locale/te";
import "dayjs/locale/tet";
import "dayjs/locale/tg";
import "dayjs/locale/th";
import "dayjs/locale/tk";
import "dayjs/locale/tl-ph";
import "dayjs/locale/tlh";
import "dayjs/locale/tr";
import "dayjs/locale/tzl";
import "dayjs/locale/tzm-latn";
import "dayjs/locale/tzm";
import "dayjs/locale/ug-cn";
import "dayjs/locale/uk";
import "dayjs/locale/ur";
import "dayjs/locale/uz-latn";
import "dayjs/locale/uz";
import "dayjs/locale/vi";
import "dayjs/locale/x-pseudo";
import "dayjs/locale/yo";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-hk";
import "dayjs/locale/zh-tw";
import "dayjs/locale/zh";
import "dayjs/locale/es-mx";
import "dayjs/locale/es-pr";
import "dayjs/locale/es-us";

// plugins
dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);

interface CalendarConfig {
  date?: Date | Dayjs
  week?: MaybeRef<number>
  month?: MaybeRef<number>
  year?: MaybeRef<number>
  type?: MaybeRef<"week" | "month">
  adaptUserLanguage?: MaybeRef<boolean>
  startOnSunday?: MaybeRef<boolean>
  onlyShowWeek?: MaybeRef<boolean>
}

/**
 * helper to start week on sunday (only if provided by options)
 * @param day
 * @param weekStart
 */
function startOfWeek(day: Dayjs, weekStart: number): Dayjs {
  const diff = day.day() < weekStart ? 7 : 0;
  return dayjs(day).subtract(day.day() - diff - weekStart, "day");
}

export const useCalendar = (options: CalendarConfig = {}) => {
  const calendarType = ref(options?.type ?? "month");
  const startOnSunday = options?.startOnSunday ? 0 : 1;

  const locale = () => {
    if (unref(options?.adaptUserLanguage) ?? true) {
      return LocaleKeyArr.includes(
        window.navigator.language.slice(0, 2) as LocaleKey
      )
        ? window.navigator.language :
        "en";
    }
    return "en";
  };
  dayjs.locale(locale());

  const editableDates = reactive({
    // @ts-expect-error TS2769: No overload matches this call.
    week: options.date ? dayjs(options.date).isoWeek() : dayjs().isoWeek(dayjs().isoWeek()).isoWeek(),
    // @ts-expect-error TS2769: No overload matches this call.
    month: options.date ? dayjs(options.date).month() : dayjs().month(dayjs().month()).month(),
    // @ts-expect-error TS2769: No overload matches this call.
    year: options.date ? dayjs(options.date).year() : dayjs().year(dayjs().year()).year(),
  });

  // reference object
  const dayjsReference = computed(() => {
    return unref(calendarType) === "month"
      ? dayjs()
        .year(unref(options?.year) ?? editableDates.year)
        .month(unref(options?.month) ?? editableDates.month)
      : dayjs()
        .year(unref(options?.year) ?? editableDates.year)
        .month(unref(options?.month) ?? editableDates.month)
        .isoWeek(unref(options?.week) ?? editableDates.week);
  }
  );

  /**
   * can be destructured in the template => v-for="{ date, isToday, key, isCurrent } in dates"
   * @returns Date Array containing everything for the calendar
   */
  const getDates = computed<Date[]>(() => {
    // Calculate the start date
    let startDate: Dayjs;
    let endDate: Dayjs;
    if (unref(calendarType) === "week") {
      startDate = startOfWeek(dayjsReference.value.startOf('isoWeek').startOf('isoWeek'), startOnSunday);
      endDate = dayjsReference.value.endOf('isoWeek').endOf('isoWeek');
    } else {
      startDate = startOfWeek(dayjsReference.value.startOf("month").startOf('isoWeek'), startOnSunday);
      endDate = startDate.add(42, "day");
    }

    // Generate all the dates within the 6-week period
    const dates: Date[] = [];
    for (let d = startDate; d.isBefore(endDate); d = d.add(1, "day")) {
      const dayOfWeek = d.day();
      const onlyWeek = options?.onlyShowWeek ? 5 : 7;
      if (dayOfWeek >= 0 && dayOfWeek <= onlyWeek) {
        const isToday = dayjs().format("DD-MM-YYYY") === d.format("DD-MM-YYYY");
        const key = d.format("DD-MM-YYYY");
        const isCurrent = unref(calendarType) === 'month' ? d.month() === dayjsReference.value.month() : d.isoWeek() === dayjsReference.value.isoWeek();
        dates.push({
          date: d,
          isToday,
          key,
          isCurrent,
        });
      }
    }
    return dates;
  });

  /**
   * @param format see Dayjs for formatting options
   * @returns array of all months
   */
  const getMonths = computed(() => {
    const monthArr: Dayjs[] = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(dayjs().month(i));
    }
    return monthArr;
  });

  /**
   * set function
   * @param type specify what should be incremented, increments by 1
   * @param to sets date to number - pass idx
   */
  const set = (
    type: "week" | "month" | "year",
    to: number | "add" | "decrement"
  ): void => {
    if (to === "add") editableDates[type] += 1;
    if (to === "decrement") editableDates[type] -= 1;
    else if (typeof to === "number") editableDates[type] = to;
    return;
  };

  const format = (dayjs: Dayjs, format: "week") => {
    if (format === "week") return dayjs.isoWeek();
    return dayjs.format(format);
  };

  return {
    dates: getDates,
    months: getMonths,
    current: { today: dayjs(), dayjs: dayjsReference },
    set,
    format,
  };
};
