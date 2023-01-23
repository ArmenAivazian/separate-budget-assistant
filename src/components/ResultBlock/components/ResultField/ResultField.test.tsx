import { createContext } from "react";
import renderer from "react-test-renderer";
import { ConfigContextWrapper } from "../../../../context/ConfigContextWrapper";
import { ResultField } from "./ResultField";
import { getFieldValue } from "./utils/getFieldValue";

const ConfigContext = createContext({
  armenSalary: { value: "1000" },
  nastyaSalary: { value: "250" },
});

describe("BlockResult -> Field", () => {
  // describe("snapshots", () => {
  //   it("default", () => {
  //     const component = renderer.create(
  //       <ConfigContext.Provider
  //         value={{
  //           armenSalary: { value: "1000" },
  //           nastyaSalary: { value: "250" },
  //         }}
  //       >
  //         <Field name="name" value={2} />
  //       </ConfigContext.Provider>
  //     );
  //     expect(component).toMatchSnapshot();
  //   });
  //   it("withTopLine", () => {
  //     const component = renderer.create(
  //       <ConfigContextWrapper>
  //         <Field name="name" value={2} topLine />
  //       </ConfigContextWrapper>
  //     );
  //     expect(component).toMatchSnapshot();
  //   });
  // });
  // describe("getFieldValue", () => {
  //   it("correct", () => {
  //     const result = getFieldValue("1000", "250", 1000);
  //     expect(result).toEqual({
  //       firstValue: 1000 * 0.75,
  //       secondValue: 1000 * 0.25,
  //     });
  //   });
  // });
});
