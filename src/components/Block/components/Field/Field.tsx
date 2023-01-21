import { ConfigValue } from "../../../../types/ConfigValue";
import style from "./Field.module.css";

export function Field({
  value,
  text,
  localStorageName,
  options,
  type = "number",
  setValue,
}: ConfigValue) {
  const handleChange = (val: string) => {
    setValue(val);

    if (localStorageName) localStorage.setItem(localStorageName, val);
  };

  return (
    <>
      <p className={style["field-name"]}>{text} :</p>
      {options ? (
        <select>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          value={value}
          onChange={({ target }) => handleChange(target.value)}
          type={type}
        />
      )}
    </>
  );
}
