import { Measure } from "../../types/recipies";

export const formatMeasure = (measure: Measure): string => {
  if (measure === 'item') {
    return ''
  }

  return measure;
}