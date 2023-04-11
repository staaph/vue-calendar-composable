#### Docs is coming, don't worry! for now my friend GPT-4 has provided something:

# Vue 3 Calendar Composable

This composable is a calendar utility for Vue 3 projects, providing a flexible and easy-to-use solution for handling
dates, months, and years. It supports multiple languages and is compatible with the dayjs library.

## Installation

```bash
npm i vue3-calendar-composable
yarn add vue3-calendar-composable
pnpm add vue3-calendar-composable
```

## Usage

Import the \`useCalendar\` composable in your component and provide the optional \`CalendarConfig\` object.

```javascript
import {useCalendar} from "vue3-calendar-composable";

const calendar = useCalendar();
```

### CalendarConfig

The \`CalendarConfig\` object allows customization of the calendar's behavior:

- \`date\`: Date | Dayjs (Optional) - The initial date to display.
- \`week\`: MaybeRef<number> (Optional) - Reference to a reactive week number.
- \`month\`: MaybeRef<number> (Optional) - Reference to a reactive month number.
- \`year\`: MaybeRef<number> (Optional) - Reference to a reactive year number.
- \`type\`: "week" | "month" (Optional, default: "month") - The display mode of the calendar.
- \`adaptUserLanguage\`: boolean (Optional, default: true) - Whether to adapt to the user's language or use English as
  default.
- \`startOnSunday\`: boolean (Optional, default: false) - Whether the week should start on Sunday.
- \`onlyShowWeek\`: boolean (Optional, default: false) - Whether to display only five days of the week.

```ts
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
```

### Methods

The \`useCalendar\` composable exposes several methods for interacting with the calendar data:

- \`dates\`: A computed property that returns an array of dates based on the current configuration.
- \`months\`: A computed property that returns an array of all months.
- \`current\`: An object containing the current dayjs instances (today and reference dayjs object).
- \`set\`: A function to increment, decrement, or set the week, month, or year.
- \`format\`: A function to format a dayjs instance based on the provided format.

