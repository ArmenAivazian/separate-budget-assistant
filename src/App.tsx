import { useContext, useState } from "react";
import style from "./App.module.css";
import { Block } from "./components/Block";
import { ResultBlock } from "./components/ResultBlock";
import { SpecificBlock } from "./components/SpecificBlock";

import { ConfigContext } from "./context/ConfigContextWrapper";
import { local } from "./local/en";

function App() {
  const [activeTab, setActiveTab] = useState<"month" | "specific">("month");
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
      <div>
        <button className={style.tab} onClick={() => setActiveTab("month")}>
          {local.tabMonth}
        </button>
        <button className={style.tab} onClick={() => setActiveTab("specific")}>
          {local.tabSpecific}
        </button>
      </div>
      <Block title={local.titleGeneral} list={firstBlock} />
      {activeTab === "month" && (
        <>
          <Block title={local.titleCalculate} list={secondBlock} />
          <ResultBlock />
        </>
      )}
      {activeTab === "specific" && <SpecificBlock />}
    </div>
  );
}

export default App;
