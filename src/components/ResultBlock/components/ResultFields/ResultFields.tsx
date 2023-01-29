import { ConfigContext } from "../../../../context/ConfigContextWrapper";
import { useContext } from "react";
import { getFieldValue } from "./utils/getFieldValue";
import { Field } from "../Field";
import { ResultFieldsProps } from "./ResultFields.types";
import { local } from "../../../../local/en";

export function ResultFields({
  name,
  value,
  withLine,
  withBalance,
}: ResultFieldsProps) {
  const { armenSalary, nastyaSalary } = useContext(ConfigContext);

  const values = getFieldValue(armenSalary.value, nastyaSalary.value, value);

  const fieldText = `${withLine ? "" : "On "}${name}:`;

  return (
    <>
      <Field
        withLine={withLine}
        text={fieldText}
        value1={values?.firstValue}
        value2={values?.secondValue}
      />

      {withBalance && values?.firstValue && (
        <Field
          withLine={withLine}
          text={local.ownBalance + ":"}
          value1={+armenSalary.value - values.firstValue}
          value2={+nastyaSalary.value - values.secondValue}
        />
      )}
    </>
  );
}
