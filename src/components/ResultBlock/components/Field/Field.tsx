import { FieldProps } from "./Field.types";
import style from "./Field.module.css";

export function Field({ withLine, text, value1, value2 }: FieldProps) {
  const nameStyle = withLine ? `${style.name} ${style.topLine}` : style.name;
  const valueStyle = withLine ? `${style.value} ${style.topLine}` : style.value;

  return value1 ? (
    <>
      <p className={nameStyle}>{text}</p>
      <p className={valueStyle}>[A] {value1}</p>
      <p className={valueStyle}>[N] {value2}</p>
      <p className={valueStyle}>[SUM] {value1 + (value2 || 0)}</p>
    </>
  ) : (
    <></>
  );
}
