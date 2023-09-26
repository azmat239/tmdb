import { ElementType } from "react";
export type HeadingType = {
  as?: ElementType;
  text: string;
  variant: "20" | "22" | "24" | "32" | "36" | "48";
  extraClasses?: string;
};
