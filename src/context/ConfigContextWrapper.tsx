import { createContext, useState } from "react";
import { local } from "../local/en";
import { ConfigValue } from "../types/ConfigValue";
import { LocalStorageName } from "../types/LocalStorageName";
import { getLocalStorageValue } from "../utils/getLocalStorageValue";

export const ConfigContext = createContext<{
  armenSalary: ConfigValue;
  nastyaSalary: ConfigValue;
  rent: ConfigValue;
  investmentRatio: ConfigValue;
  firstDay: ConfigValue;
  costProducts: ConfigValue;
  lastDay: ConfigValue;
  costHealth: ConfigValue;
  costServices: ConfigValue;
  costCommunalApartment: ConfigValue;
  targetFirstDay: ConfigValue;
  targetLastDay: ConfigValue;
}>({} as any);

export function ConfigContextWrapper({ children }: { children: JSX.Element }) {
  const defArmenSalary = getLocalStorageValue(LocalStorageName.ArmenSalary);
  const defNastyaSalary = getLocalStorageValue(LocalStorageName.NastyaSalary);
  const defRent = getLocalStorageValue(LocalStorageName.Rent);
  const defInvestRatio = getLocalStorageValue(LocalStorageName.InvestmentRatio);

  const [armenSalary, setArmenSalary] = useState(defArmenSalary);
  const [nastyaSalary, setNastyaSalary] = useState(defNastyaSalary);
  const [rent, setRent] = useState(defRent);
  const [investmentRatio, setInvestmentRatio] = useState(defInvestRatio);
  const [firstDay, setFirstDay] = useState("");
  const [lastDay, setLastDay] = useState("");
  const [costProducts, setCostProducts] = useState("");
  const [costHealth, setCostHealth] = useState("");
  const [costServices, setCostServices] = useState("");
  const [costCommunalApartment, setCommunalApartment] = useState("");
  const [targetFirstDay, setTargetFirstDay] = useState("");
  const [targetLastDay, setTargetLastDay] = useState("");

  return (
    <ConfigContext.Provider
      value={{
        armenSalary: {
          text: local.salaryArmen,
          value: armenSalary,
          localStorageName: LocalStorageName.ArmenSalary,
          setValue: setArmenSalary,
        },
        nastyaSalary: {
          text: local.salaryNastya,
          value: nastyaSalary,
          localStorageName: LocalStorageName.NastyaSalary,
          setValue: setNastyaSalary,
        },
        rent: {
          text: local.rent,
          value: rent,
          localStorageName: LocalStorageName.Rent,
          setValue: setRent,
        },
        investmentRatio: {
          text: local.investmentRatio,
          value: investmentRatio,
          localStorageName: LocalStorageName.InvestmentRatio,
          setValue: setInvestmentRatio,
        },
        firstDay: {
          text: local.firstDayCalculate,
          value: firstDay,
          type: "date",
          setValue: setFirstDay,
        },
        lastDay: {
          value: lastDay,
          text: local.lastDayCalculate,
          type: "date",
          setValue: setLastDay,
        },
        costProducts: {
          text: local.products,
          value: costProducts,
          setValue: setCostProducts,
        },
        costHealth: {
          text: local.health,
          value: costHealth,
          setValue: setCostHealth,
        },
        costServices: {
          text: local.services,
          value: costServices,
          setValue: setCostServices,
        },
        costCommunalApartment: {
          text: local.communalApartment,
          value: costCommunalApartment,
          setValue: setCommunalApartment,
        },
        targetFirstDay: {
          text: local.targetFirstDay,
          value: targetFirstDay,
          type: "date",
          setValue: setTargetFirstDay,
        },
        targetLastDay: {
          text: local.targetLastDay,
          value: targetLastDay,
          type: "date",
          setValue: setTargetLastDay,
        },
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
