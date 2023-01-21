import { ConfigValue } from "../../types/ConfigValue";
import { Title } from "../Title";
import style from "./Block.module.css";
import { Field } from "./components/Field";

export function Block({ title, list }: { title: string; list: ConfigValue[] }) {
  return (
    <>
      <Title text={title} />
      <div className={style["block-grid"]}>
        {list.map((configs) => (
          <Field key={configs.text} {...configs} />
        ))}
      </div>
    </>
  );
}
