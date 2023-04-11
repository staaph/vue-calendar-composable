import type { Dayjs } from "dayjs";
import { ComputedRef } from "vue";
import { LocaleKeyArr } from "./LocaleKey";

export interface Date {
  date: Dayjs
  isToday: boolean
  key: string
  isCurrent: boolean
}

export type LocaleKey = typeof LocaleKeyArr[number]

export interface Current {
  today: Dayjs
  dayjs: ComputedRef<Dayjs>
}
