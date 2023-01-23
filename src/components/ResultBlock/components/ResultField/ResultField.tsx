import { ConfigContext } from "../../../../context/ConfigContextWrapper";
import style from "./ResultField.module.css";
import { useContext } from "react";
import { getFieldValue } from "./utils/getFieldValue";

export function ResultField({
  name,
  value,
  topLine,
}: {
  name: string;
  value: number;
  topLine?: boolean;
}) {
  const { armenSalary, nastyaSalary } = useContext(ConfigContext);

  const values = getFieldValue(armenSalary.value, nastyaSalary.value, value);

  const nameStyle = topLine ? `${style.name} ${style.topLine}` : style.name;
  const valueStyle = topLine ? `${style.value} ${style.topLine}` : style.value;

  return values ? (
    <>
      <p className={nameStyle}>
        {topLine ? "" : "On "}
        {name}:
      </p>
      <p className={valueStyle}>[A] {values.firstValue}</p>
      <p className={valueStyle}>[N] {values.secondValue}</p>
    </>
  ) : (
    <></>
  );
}
