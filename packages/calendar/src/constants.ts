export const basicFormatOptions = [
  { "format": "YY", "description": "Two-digit year" },
  { "format": "YYYY", "description": "Four-digit year" },
  { "format": "M", "description": "The month, beginning at 1" },
  { "format": "MM", "description": "The month, 2-digits" },
  { "format": "MMM", "description": "The abbreviated month name" },
  { "format": "MMMM", "description": "The full month name" },
  { "format": "D", "description": "The day of the month" },
  { "format": "DD", "description": "The day of the month, 2-digits" },
  { "format": "d", "description": "The day of the week, with Sunday as 0" },
  { "format": "dd", "description": "The min name of the day of the week" },
  { "format": "ddd", "description": "The short name of the day of the week" },
  { "format": "dddd", "description": "The name of the day of the week" },
  { "format": "H", "description": "The hour" },
  { "format": "HH", "description": "The hour, 2-digits" },
  { "format": "h", "description": "The hour, 12-hour clock" },
  { "format": "hh", "description": "The hour, 12-hour clock, 2-digits" },
  { "format": "m", "description": "The minute" },
  { "format": "mm", "description": "The minute, 2-digits" },
  { "format": "s", "description": "The second" },
  { "format": "ss", "description": "The second, 2-digits" },
  { "format": "SSS", "description": "The millisecond, 3-digits" },
  { "format": "Z", "description": "The offset from UTC, ±HH:mm" },
  { "format": "ZZ", "description": "The offset from UTC, ±HHmm" },
  { "format": "A", "description": "AM PM" },
  { "format": "a", "description": "am pm" }
] as const;

export const localizedformatOptions =
  [
    { "format": "LT", "description": "h:mm A" },
    { "format": "LTS", "description": "h:mm:ss A" },
    { "format": "L", "description": "MM/DD/YYYY" },
    { "format": "LL", "description": "MMMM D, YYYY" },
    { "format": "LLL", "description": "MMMM D, YYYY h:mm A" },
    { "format": "LLLL", "description": "dddd, MMMM D, YYYY h:mm A" },
    { "format": "l", "description": "M/D/YYYY" },
    { "format": "ll", "description": "MMM D, YYYY" },
    { "format": "lll", "description": "MMM D, YYYY h:mm A" },
    { "format": "llll", "description": "ddd, MMM D, YYYY h:mm A" }
  ] as const;

export const formatOptions = [
  ...basicFormatOptions,
  ...localizedformatOptions
];