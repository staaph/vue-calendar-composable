# CalendarConfig

The `CalendarConfig` object allows customization of the calendar's behavior:

`date`: Date | Dayjs (Optional) - The initial date to display.
`week`: Ref (Optional) - Reference to a reactive week number.
`month`: Ref (Optional) - Reference to a reactive month number.
`year`: Ref (Optional) - Reference to a reactive year number.
`type`: "week" | "month" (Optional, default: "month") - The display mode of the calendar.
`adaptUserLanguage`: boolean (Optional, default: true) - Whether to adapt to the user's language or use English as
default.
`startOnSunday`: boolean (Optional, default: false) - Whether the week should start on Sunday.
`onlyShowWeek`: boolean (Optional, default: false) - Whether to display only five days of the week.

# Methods

The `useCalendar` composable exposes several methods for interacting with the calendar data:

`dates`: A computed property that returns an array of dates based on the current configuration.
`months`: A computed property that returns an array of all months.
`current`: An object containing the current dayjs instances (today and reference dayjs object).
`set`: A function to increment, decrement, or set the week, month, or year.
`format`: A function to format a dayjs instance based on the provided format.