import { HTMLInputTypeAttribute } from "react";

export interface ConfigValue {
  value: string;
  text: string;
  localStorageName?: string;
  options?: string[];
  type?: HTMLInputTypeAttribute;
  setValue: (value: string) => void;
}
