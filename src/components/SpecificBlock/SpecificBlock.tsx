import { useState } from "react";
import { local } from "../../local/en";
import { Block } from "../Block";
import { ResultField } from "../ResultBlock/components/ResultField";
import { Title } from "../Title";
import style from "./SpecificBlock.module.css";

export function SpecificBlock() {
  const [fieldValue, setFieldValue] = useState("");

  return (
    <>
      <Block
        title={local.specific}
        list={[
          { value: fieldValue, text: local.fieldName, setValue: setFieldValue },
        ]}
      />
      <Title text={local.result} />
      <div className={style.grid}>
        <ResultField name={local.fieldName} value={+fieldValue} />
      </div>
    </>
  );
}
