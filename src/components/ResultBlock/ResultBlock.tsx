import { useContext } from "react";
import { ConfigContext } from "../../context/ConfigContextWrapper";
import { local } from "../../local/en";
import { Title } from "../Title";
import { Field } from "./components/Field";
import { useFieldsForResult } from "./hooks/useFieldValue";
import style from "./ResultBlock.module.css";

export function ResultBlock() {
  const { armenSalary, nastyaSalary, rent, investmentRatio } =
    useContext(ConfigContext);

  const investment =
    (+armenSalary.value + +nastyaSalary.value) *
      (+investmentRatio.value / 100) || 0;
  const rentValue = +rent.value || 0;

  const fields = useFieldsForResult();
  const sum =
    investment +
    rentValue +
    fields.reduce((acc, { value }) => acc + value || 0, 0);

  return (
    <>
      <Title text={local.result} />
      <div className={style["block-grid-3"]}>
        {investment ? (
          <Field name={local.investment} value={investment} />
        ) : (
          <></>
        )}
        {rentValue ? <Field name={rent.text} value={+rent.value} /> : <></>}
        {fields.map((params) => (
          <Field key={params.name} {...params} />
        ))}

        <Field name={local.sum} value={sum} topLine />
      </div>
    </>
  );
}
