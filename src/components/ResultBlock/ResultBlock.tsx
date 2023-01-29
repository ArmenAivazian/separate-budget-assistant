import { useContext } from "react";
import { ConfigContext } from "../../context/ConfigContextWrapper";
import { local } from "../../local/en";
import { Title } from "../Title";
import { ResultFields } from "./components/ResultFields";
import { useFieldsForResult } from "./hooks/useFieldValue";
import style from "./ResultBlock.module.css";

export function ResultBlock() {
  const { armenSalary, nastyaSalary, rent, investmentRatio } =
    useContext(ConfigContext);

  const sumSalaries = +armenSalary.value + +nastyaSalary.value;
  const investment = sumSalaries * (+investmentRatio.value / 100) || 0;
  const rentValue = +rent.value || 0;

  const fields = useFieldsForResult();
  const sumFields = fields.reduce((acc, { value }) => acc + value || 0, 0);
  const sum = investment + rentValue + sumFields;

  return (
    <>
      <Title text={local.result} />
      <div className={style["block-grid-3"]}>
        {investment && (
          <ResultFields name={local.investment} value={investment} />
        )}

        {rentValue && <ResultFields name={rent.text} value={+rent.value} />}
        
        {fields.map((params) => (
          <ResultFields key={params.name} {...params} />
        ))}

        <ResultFields
          name={local.sumExpenses}
          value={sum}
          withLine
          withBalance
        />
      </div>
    </>
  );
}
