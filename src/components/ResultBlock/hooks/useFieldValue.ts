import { useContext } from "react";
import { ConfigContext } from "../../../context/ConfigContextWrapper";
import { getDaysBetweenTwoDates } from "../utils/getDaysBetweenTwoDates";

export function useFieldsForResult() {
  const {
    firstDay,
    lastDay,
    costProducts,
    costHealth,
    costServices,
    costCommunalApartment,
    targetFirstDay,
    targetLastDay,
  } = useContext(ConfigContext);

  const fields = [
    costProducts,
    costHealth,
    costServices,
    costCommunalApartment,
  ];

  const daysBetweenDates = getDaysBetweenTwoDates(
    firstDay.value.toString(),
    lastDay.value.toString()
  );
  const daysBetweenTargetDates = getDaysBetweenTwoDates(
    targetFirstDay.value.toString(),
    targetLastDay.value.toString()
  );

  return fields.map(({ text, value }) => ({
    name: text,
    value: (+value / daysBetweenDates) * daysBetweenTargetDates
  }));
}
