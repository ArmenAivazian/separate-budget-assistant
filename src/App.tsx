import { useContext } from "react";
import style from "./App.module.css";
import { Block } from "./components/Block";
import { ResultBlock } from "./components/ResultBlock";

import { ConfigContext } from "./context/ConfigContextWrapper";
import { local } from "./local/en";

function App() {
  const {
    armenSalary,
    nastyaSalary,
    rent,
    investmentRatio,
    firstDay,
    lastDay,
    costProducts,
    costHealth,
    costServices,
    costCommunalApartment,
    targetFirstDay,
    targetLastDay,
  } = useContext(ConfigContext);

  const firstBlock = [armenSalary, nastyaSalary];

  const secondBlock = [
    firstDay,
    lastDay,
    costProducts,
    costHealth,
    costServices,
    costCommunalApartment,
    rent,
    investmentRatio,
    targetFirstDay,
    targetLastDay,
  ];

  return (
    <div className={style.app}>
      <Block title={local.titleGeneral} list={firstBlock} />
      <Block title={local.titleCalculate} list={secondBlock} />
      <ResultBlock />
    </div>
  );
}

export default App;
