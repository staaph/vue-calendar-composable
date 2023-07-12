import { basicFormatOptions, localizedformatOptions } from "../src/constants";

type BasicFormat = typeof basicFormatOptions[number]['format'];
type LocalizedFormat = typeof localizedformatOptions[number]['format'];

export type DayjsFormatOptions = BasicFormat | LocalizedFormat ;