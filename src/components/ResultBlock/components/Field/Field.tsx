import { ConfigContext } from "../../../../context/ConfigContextWrapper";
import style from "./Field.module.css";
import { useContext } from "react";

export function Field({
  name,
  value,
  topLine,
}: {
  name: string;
  value: number;
  topLine?: boolean;
}) {
  const { armenSalary, nastyaSalary } = useContext(ConfigContext);

  const percentDifferent = +nastyaSalary.value / +armenSalary.value;

  const firstValue = Math.round((1 - percentDifferent) * value);
  const secondValue = Math.round(percentDifferent * value);

  const nameStyle = topLine ? `${style.name} ${style.topLine}` : style.name;
  const valueStyle = topLine ? `${style.value} ${style.topLine}` : style.value;

  return firstValue ? (
    <>
      <p className={nameStyle}>
        {topLine ? "" : "On "}
        {name}:
      </p>
      <p className={valueStyle}>[A] {firstValue}</p>
      <p className={valueStyle}>[N] {secondValue}</p>
    </>
  ) : (
    <></>
  );
}
